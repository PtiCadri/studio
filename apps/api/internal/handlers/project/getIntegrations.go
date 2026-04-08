package project

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) GetIntegrations(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
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

	response := projectResponse.ProjectIntegrationsResponse{
		ProjectID:          integrations.ProjectID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode project integrations", http.StatusInternalServerError)
	}
}
