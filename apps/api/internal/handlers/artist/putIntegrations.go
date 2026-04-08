package artist

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistRequests "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PutIntegrations(w http.ResponseWriter, r *http.Request) {
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
