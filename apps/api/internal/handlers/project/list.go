package project

import (
	"encoding/json"
	"net/http"

	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) List(w http.ResponseWriter, r *http.Request) {
	projects, err := h.projectRepo.List(r.Context())
	if err != nil {
		http.Error(w, "failed to fetch projects", http.StatusInternalServerError)
		return
	}

	response := make([]projectResponse.ProjectResponse, 0, len(projects))

	for _, project := range projects {
		response = append(response, projectResponse.ProjectResponse{
			ID:        project.ID,
			Name:      project.Name,
			ImageURL:  utils.NullStringToPointer(project.ImageURL),
			CreatedAt: project.CreatedAt,
			UpdatedAt: project.UpdatedAt,
		})
	}

	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(response)
}
