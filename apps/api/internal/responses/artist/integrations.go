package artist

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type ArtistIntegrationsResponse struct {
	ArtistID           int64   `json:"artist_id"`
	SpotifyEmbedURL    *string `json:"spotify_embed_url"`
	DeezerEmbedURL     *string `json:"deezer_embed_url"`
	AppleMusicEmbedURL *string `json:"apple_music_embed_url"`
}

func ToArtistIntegrationsResponse(
	integrations models.ArtistIntegrations,
) ArtistIntegrationsResponse {
	return ArtistIntegrationsResponse{
		ArtistID:           integrations.ArtistID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
	}
}
