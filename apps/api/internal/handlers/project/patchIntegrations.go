package project

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	projectRequests "github.com/PtiCadri/studio/apps/api/internal/requests/project"
	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Projects) PatchIntegrations(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request projectRequests.PatchIntegrations

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentIntegrations, err := h.projectRepo.GetIntegrations(
		r.Context(),
		projectID,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project integrations not found", http.StatusNotFound)
			return
		}

		http.Error(
			w,
			"failed to fetch project integrations",
			http.StatusInternalServerError,
		)
		return
	}

	spotifyEmbedURL := utils.NullStringToPointer(
		currentIntegrations.SpotifyEmbedURL,
	)
	if request.SpotifyEmbedURL != nil {
		spotifyEmbedURL = request.SpotifyEmbedURL
	}

	deezerEmbedURL := utils.NullStringToPointer(
		currentIntegrations.DeezerEmbedURL,
	)
	if request.DeezerEmbedURL != nil {
		deezerEmbedURL = request.DeezerEmbedURL
	}

	appleMusicEmbedURL := utils.NullStringToPointer(
		currentIntegrations.AppleMusicEmbedURL,
	)
	if request.AppleMusicEmbedURL != nil {
		appleMusicEmbedURL = request.AppleMusicEmbedURL
	}

	integrations, err := h.projectRepo.PutIntegrations(
		r.Context(),
		projectID,
		spotifyEmbedURL,
		deezerEmbedURL,
		appleMusicEmbedURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to patch project integrations",
			http.StatusInternalServerError,
		)
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
		http.Error(
			w,
			"failed to encode project integrations",
			http.StatusInternalServerError,
		)
	}
}
