package artist

import (
	"database/sql"
	"net/http"

	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetIntegrations(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	integrations, err := h.artistRepo.GetIntegrations(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist integrations not found", http.StatusNotFound)
			return
		}

		http.Error(
			w,
			"failed to fetch artist integrations",
			http.StatusInternalServerError,
		)
		return
	}

	response := artistResp.ToArtistIntegrationsResponse(integrations)
	utils.WriteJSON(w, http.StatusOK, response)
}
