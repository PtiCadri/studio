package artistHandler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistRequests "github.com/PtiCadri/studio/apps/api/internal/requests/artists"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artists"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Artists) PutIntegrations(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistRequests.PutIntegrations

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	integrations, err := h.artistRepo.PutIntegrations(
		r.Context(),
		artistID,
		request.SpotifyEmbedURL,
		request.DeezerEmbedURL,
		request.AppleMusicEmbedURL,
		request.SoundcloudEmbedURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to save artist integrations",
			http.StatusInternalServerError,
		)
		return
	}

	response := artistResponse.ArtistIntegrationsResponse{
		ArtistID:           integrations.ArtistID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
		SoundcloudEmbedURL: utils.NullStringToPointer(integrations.SoundcloudEmbedURL),
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
