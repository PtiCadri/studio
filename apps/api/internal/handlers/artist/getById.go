package artist

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetByID(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	artist, err := h.artistRepo.GetByID(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist", http.StatusInternalServerError)
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

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode artist", http.StatusInternalServerError)
	}
}
