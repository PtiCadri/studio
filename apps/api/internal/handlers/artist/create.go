package artist

import (
	"encoding/json"
	"net/http"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Artists) Create(w http.ResponseWriter, r *http.Request) {
	var request struct {
		Name     string  `json:"name"`
		ImageURL *string `json:"image_url"`
	}

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	if request.Name == "" {
		http.Error(w, "name is required", http.StatusBadRequest)
		return
	}

	artist, err := h.artistRepo.Create(
		r.Context(),
		request.Name,
		request.ImageURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to create artist",
			http.StatusInternalServerError,
		)
		return
	}

	response := artistResponse.ArtistResponse{
		ID:        artist.ID,
		Name:      artist.Name,
		ImageURL:  utils.NullStringToPointer(artist.ImageURL),
		CreatedAt: artist.CreatedAt,
		UpdatedAt: artist.UpdatedAt,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode artist",
			http.StatusInternalServerError,
		)
	}
}
