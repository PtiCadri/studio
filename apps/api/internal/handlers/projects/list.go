package projectHandler

import (
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/responses"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Projects) List(w http.ResponseWriter, r *http.Request) {
	projects, err := h.projectRepo.List(r.Context())
	if err != nil {
		http.Error(w, "failed to fetch projects", http.StatusInternalServerError)
		return
	}

	response := make([]responses.ProjectResponse, 0, len(projects))

	for _, project := range projects {
		response = append(response, responses.ProjectResponse{
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
