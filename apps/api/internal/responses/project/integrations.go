package project

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type ProjectIntegrationsResponse struct {
	ProjectID          int64   `json:"project_id"`
	SpotifyEmbedURL    *string `json:"spotify_embed_url"`
	DeezerEmbedURL     *string `json:"deezer_embed_url"`
	AppleMusicEmbedURL *string `json:"apple_music_embed_url"`
}

func ToProjectIntegrationsResponse(
	integrations models.ProjectIntegrations,
) ProjectIntegrationsResponse {
	return ProjectIntegrationsResponse{
		ProjectID:          integrations.ProjectID,
		SpotifyEmbedURL:    utils.NullStringToPointer(integrations.SpotifyEmbedURL),
		DeezerEmbedURL:     utils.NullStringToPointer(integrations.DeezerEmbedURL),
		AppleMusicEmbedURL: utils.NullStringToPointer(integrations.AppleMusicEmbedURL),
	}
}
