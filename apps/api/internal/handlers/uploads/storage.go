package uploads

import (
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"
	"time"
)

func saveUploadedFile(
	file multipart.File,
	folder string,
	ext string,
) (string, error) {
	uploadDir := filepath.Join("./uploads", folder)
	if err := os.MkdirAll(uploadDir, 0o755); err != nil {
		return "", err
	}

	filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)
	dstPath := filepath.Join(uploadDir, filename)

	dst, err := os.Create(dstPath)
	if err != nil {
		return "", err
	}
	defer dst.Close()

	if _, err := io.Copy(dst, file); err != nil {
		return "", err
	}

	return filename, nil
}
