package uploads

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	uploadResponse "github.com/PtiCadri/studio/apps/api/internal/responses/uploads"
)

var allowedFolders = map[string]bool{
	"artists":  true,
	"projects": true,
}

var allowedExtensions = map[string]bool{
	".jpg":  true,
	".jpeg": true,
	".png":  true,
	".webp": true,
}

var allowedMimeTypes = map[string]bool{
	"image/jpeg": true,
	"image/jpg":  true,
	"image/png":  true,
	"image/webp": true,
}

func (h Uploads) Create(w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, 5<<20) // 5 MB
	err := r.ParseMultipartForm(10 << 20)          // 10 MB
	if err != nil {
		http.Error(w, "failed to parse multipart form", http.StatusBadRequest)
		return
	}

	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "file is required", http.StatusBadRequest)
		return
	}
	defer file.Close()

	folder := strings.TrimSpace(r.FormValue("folder"))
	if folder == "" {
		http.Error(w, "folder is required", http.StatusBadRequest)
		return
	}

	if !allowedFolders[folder] {
		http.Error(w, "invalid folder", http.StatusBadRequest)
		return
	}

	ext := strings.ToLower(filepath.Ext(header.Filename))
	if ext == "" {
		http.Error(w, "file extension is required", http.StatusBadRequest)
		return
	}

	if !allowedExtensions[ext] {
		http.Error(w, "unsupported file extension", http.StatusBadRequest)
		return
	}

	// Read first bytes to detect actual MIME type
	buffer := make([]byte, 512)
	n, err := file.Read(buffer)
	if err != nil && err != io.EOF {
		http.Error(w, "failed to read file", http.StatusInternalServerError)
		return
	}

	mimeType := http.DetectContentType(buffer[:n])
	if !allowedMimeTypes[mimeType] {
		http.Error(w, "unsupported file type", http.StatusBadRequest)
		return
	}

	// Reset file cursor before copying whole file
	_, err = file.Seek(0, 0)
	if err != nil {
		http.Error(w, "failed to reset file reader", http.StatusInternalServerError)
		return
	}

	uploadDir := filepath.Join("./uploads", folder)

	err = os.MkdirAll(uploadDir, 0o755)
	if err != nil {
		http.Error(
			w,
			"failed to create uploads directory",
			http.StatusInternalServerError,
		)
		return
	}

	filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)
	dstPath := filepath.Join(uploadDir, filename)

	dst, err := os.Create(dstPath)
	if err != nil {
		http.Error(w, "failed to create file", http.StatusInternalServerError)
		return
	}
	defer dst.Close()

	_, err = io.Copy(dst, file)
	if err != nil {
		http.Error(w, "failed to save file", http.StatusInternalServerError)
		return
	}

	response := uploadResponse.UploadResponse{
		URL: "/uploads/" + folder + "/" + filename,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode upload response",
			http.StatusInternalServerError,
		)
	}
}
