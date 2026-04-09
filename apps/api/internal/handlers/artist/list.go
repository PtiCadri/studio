package artist

import (
	"net/http"

	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) List(w http.ResponseWriter, r *http.Request) {
	artists, err := h.artistRepo.List(r.Context())
	if err != nil {
		http.Error(w, "failed to fetch artists", http.StatusInternalServerError)
		return
	}

	response := artistResp.ToArtistResponses(artists)
	utils.WriteJSON(w, http.StatusOK, response)
}
