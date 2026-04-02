package projectHandler

import (
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/responses"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Projects) Create(w http.ResponseWriter, r *http.Request) {
	var request struct {
		Name     string  `json:"name"`
		ImageURL *string `json:"image_url"`
	}

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	if request.Name == "" {
		http.Error(w, "name is required", http.StatusBadRequest)
		return
	}

	project, err := h.projectRepo.Create(
		r.Context(),
		request.Name,
		request.ImageURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to create project",
			http.StatusInternalServerError,
		)
		return
	}

	response := responses.ProjectResponse{
		ID:        project.ID,
		Name:      project.Name,
		ImageURL:  utils.NullStringToPointer(project.ImageURL),
		CreatedAt: project.CreatedAt,
		UpdatedAt: project.UpdatedAt,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode project",
			http.StatusInternalServerError,
		)
	}
}
