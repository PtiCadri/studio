package project

import (
	"database/sql"
	"net/http"

	projectResp "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetIntegrations(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	integrations, err := h.projectRepo.GetIntegrations(r.Context(), projectID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project integrations not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch project integrations", http.StatusInternalServerError)
		return
	}

	response := projectResp.ToProjectIntegrationsResponse(integrations)

	utils.WriteJSON(w, http.StatusOK, response)
}
