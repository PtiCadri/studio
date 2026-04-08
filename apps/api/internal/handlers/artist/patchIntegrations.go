package artist

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistRequests "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Artists) PatchIntegrations(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistRequests.PatchIntegrations

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentIntegrations, err := h.artistRepo.GetIntegrations(
		r.Context(),
		artistID,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(
				w,
				"artist integrations not found",
				http.StatusNotFound,
			)
			return
		}

		http.Error(
			w,
			"failed to fetch artist integrations",
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

	integrations, err := h.artistRepo.PutIntegrations(
		r.Context(),
		artistID,
		spotifyEmbedURL,
		deezerEmbedURL,
		appleMusicEmbedURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to patch artist integrations",
			http.StatusInternalServerError,
		)
		return
	}

	response := artistResponse.ArtistIntegrationsResponse{
		ArtistID:           integrations.ArtistID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode artist integrations",
			http.StatusInternalServerError,
		)
	}
}
