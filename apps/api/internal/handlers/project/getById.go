package project

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetByID(w http.ResponseWriter, r *http.Request) {
	idStr := chi.URLParam(r, "id")
	id, err := strconv.ParseInt(idStr, 10, 64)
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

	artistResponses := make([]artistResponse.ArtistResponse, 0, len(artists))

	for _, artist := range artists {
		artistResponses = append(artistResponses, artistResponse.ArtistResponse{
			ID:        artist.ID,
			Name:      artist.Name,
			ImageURL:  utils.NullStringToPointer(artist.ImageURL),
			CreatedAt: artist.CreatedAt,
			UpdatedAt: artist.UpdatedAt,
		})
	}

	response := projectResponse.ProjectDetailResponse{
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
