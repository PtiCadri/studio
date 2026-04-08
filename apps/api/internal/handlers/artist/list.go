package artist

import (
	"encoding/json"
	"net/http"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) List(w http.ResponseWriter, r *http.Request) {
	artists, err := h.artistRepo.List(r.Context())
	if err != nil {
		http.Error(w, "failed to fetch artists", http.StatusInternalServerError)
		return
	}

	response := make([]artistResponse.ArtistResponse, 0, len(artists))

	for _, artist := range artists {
		response = append(response, artistResponse.ArtistResponse{
			ID:        artist.ID,
			Name:      artist.Name,
			ImageURL:  utils.NullStringToPointer(artist.ImageURL),
			CreatedAt: artist.CreatedAt,
			UpdatedAt: artist.UpdatedAt,
		})
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode artists", http.StatusInternalServerError)
	}
}
