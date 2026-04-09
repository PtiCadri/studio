package project

import (
	"database/sql"
	"encoding/json"
	"net/http"

	projectReq "github.com/PtiCadri/studio/apps/api/internal/requests/project"
	projectResp "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) Patch(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request projectReq.PatchProject

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	// 1. Fetch current project
	currentProject, err := h.projectRepo.GetByID(r.Context(), projectID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch project", http.StatusInternalServerError)
		return
	}

	// 2. Merge values
	name := currentProject.Name
	if request.Name != nil {
		name = *request.Name
	}

	var imageURL *string

	// keep current value if exists
	if currentProject.ImageURL.Valid {
		imageURL = &currentProject.ImageURL.String
	}

	// override if provided
	if request.ImageURL != nil {
		imageURL = request.ImageURL
	}

	// 3. Reuse existing update method
	project, err := h.projectRepo.Update(
		r.Context(),
		projectID,
		name,
		imageURL,
	)
	if err != nil {
		http.Error(w, "failed to update project", http.StatusInternalServerError)
		return
	}

	// 4. Response
	response := projectResp.ToProjectResponse(project)

	utils.WriteJSON(w, http.StatusOK, response)
}
