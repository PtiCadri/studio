package project

import (
	"context"
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetByID(w http.ResponseWriter, r *http.Request) {
	id, err := utils.ParseIDParam(r, "id")

	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	project, artists, err := h.getProjectWithArtists(r.Context(), id)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch project", http.StatusInternalServerError)
		return
	}

	response := toProjectDetailResponse(project, artists)
	utils.WriteJSON(w, http.StatusOK, response)
}

func (h Handler) getProjectWithArtists(
	ctx context.Context,
	id int64,
) (models.Project, []models.Artist, error) {

	project, err := h.projectRepo.GetByID(ctx, id)
	if err != nil {
		return models.Project{}, nil, err
	}

	artists, err := h.projectRepo.GetArtistsByProjectID(ctx, project.ID)
	if err != nil {
		return models.Project{}, nil, err
	}

	return project, artists, nil
}
