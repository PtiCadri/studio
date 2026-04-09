package project

import (
	"database/sql"
	"net/http"

	projectReq "github.com/PtiCadri/studio/apps/api/internal/requests/project"
	projectResp "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PatchIntegrations(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request projectReq.PatchIntegrations

	if err := utils.DecodeJSON(r, &request); err != nil {
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

	response := projectResp.ToProjectIntegrationsResponse(integrations)

	utils.WriteJSON(w, http.StatusOK, response)
}
