package projectHandler

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/projects"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Projects) GetLinks(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
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

	response := projectResponse.ProjectLinksResponse{
		ProjectID:     links.ProjectID,
		SpotifyURL:    utils.NullStringToPointer(links.SpotifyURL),
		DeezerURL:     utils.NullStringToPointer(links.DeezerURL),
		AppleMusicURL: utils.NullStringToPointer(links.AppleMusicURL),
		SoundcloudURL: utils.NullStringToPointer(links.SoundcloudURL),
		YoutubeURL:    utils.NullStringToPointer(links.YoutubeURL),
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode project links", http.StatusInternalServerError)
	}
}
