package artist

import (
	"database/sql"
	"net/http"

	artistReq "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PatchIntegrations(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistReq.PatchIntegrations

	if err := utils.DecodeJSON(r, &request); err != nil {
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

	response := artistResp.ToArtistIntegrationsResponse(integrations)
	utils.WriteJSON(w, http.StatusOK, response)
}
