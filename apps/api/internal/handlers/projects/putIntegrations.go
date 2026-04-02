package projectHandler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	projectRequests "github.com/PtiCadri/studio/apps/api/internal/requests/projects"
	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/projects"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Projects) PutIntegrations(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request projectRequests.PutIntegrations

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	integrations, err := h.projectRepo.PutIntegrations(
		r.Context(),
		projectID,
		request.SpotifyEmbedURL,
		request.DeezerEmbedURL,
		request.AppleMusicEmbedURL,
		request.SoundcloudEmbedURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to save project integrations",
			http.StatusInternalServerError,
		)
		return
	}

	response := projectResponse.ProjectIntegrationsResponse{
		ProjectID:          integrations.ProjectID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
		SoundcloudEmbedURL: utils.NullStringToPointer(integrations.SoundcloudEmbedURL),
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode project integrations", http.StatusInternalServerError)
	}
}
