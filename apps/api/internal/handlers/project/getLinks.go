package project

import (
	"database/sql"
	"net/http"

	projectResp "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetLinks(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	links, err := h.projectRepo.GetLinks(r.Context(), projectID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project links not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch project links", http.StatusInternalServerError)
		return
	}

	response := projectResp.ToProjectLinksResponse(links)

	utils.WriteJSON(w, http.StatusOK, response)
}
