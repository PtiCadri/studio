package artist

import (
	"database/sql"
	"net/http"

	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetByID(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
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

	response := artistResp.ToArtistResponse(artist)
	utils.WriteJSON(w, http.StatusOK, response)
}
