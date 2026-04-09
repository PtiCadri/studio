package artist

import (
	"database/sql"
	"net/http"

	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetLinks(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	links, err := h.artistRepo.GetLinks(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist links not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist links", http.StatusInternalServerError)
		return
	}

	response := artistResp.ToArtistLinksResponse(links)
	utils.WriteJSON(w, http.StatusOK, response)
}
