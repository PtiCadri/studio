package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/repository"
	"github.com/PtiCadri/studio/apps/api/internal/responses"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type Projects struct {
	projectRepo repository.ProjectRepository
}

func NewProjects(projectRepo repository.ProjectRepository) Projects {
	return Projects{projectRepo: projectRepo}
}

func (h Projects) List(w http.ResponseWriter, r *http.Request) {
	projects, err := h.projectRepo.List(r.Context())
	if err != nil {
		http.Error(
			w,
			"failed to fetch projects",
			http.StatusInternalServerError,
		)
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

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode projects",
			http.StatusInternalServerError,
		)
	}
}

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

func (h Projects) GetByID(w http.ResponseWriter, r *http.Request) {
	id, err := utils.GetIDFromPath(r.URL.Path, "/projects/")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	project, err := h.projectRepo.GetByID(r.Context(), id)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project not found", http.StatusNotFound)
			return
		}

		http.Error(
			w,
			"failed to fetch project",
			http.StatusInternalServerError,
		)
		return
	}

	artists, err := h.projectRepo.GetArtistsByProjectID(
		r.Context(),
		project.ID,
	)
	if err != nil {
		http.Error(
			w,
			"failed to fetch project artists",
			http.StatusInternalServerError,
		)
		return
	}

	artistResponses := make([]responses.ArtistResponse, 0, len(artists))

	for _, artist := range artists {
		artistResponses = append(artistResponses, responses.ArtistResponse{
			ID:        artist.ID,
			Name:      artist.Name,
			ImageURL:  utils.NullStringToPointer(artist.ImageURL),
			CreatedAt: artist.CreatedAt,
			UpdatedAt: artist.UpdatedAt,
		})
	}

	response := responses.ProjectDetailResponse{
		ID:        project.ID,
		Name:      project.Name,
		ImageURL:  utils.NullStringToPointer(project.ImageURL),
		CreatedAt: project.CreatedAt,
		UpdatedAt: project.UpdatedAt,
		Artists:   artistResponses,
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode project",
			http.StatusInternalServerError,
		)
	}
}
