package project

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type ProjectLinksResponse struct {
	ProjectID     int64   `json:"project_id"`
	SpotifyURL    *string `json:"spotify_url"`
	DeezerURL     *string `json:"deezer_url"`
	AppleMusicURL *string `json:"apple_music_url"`
	SoundcloudURL *string `json:"soundcloud_url"`
	YoutubeURL    *string `json:"youtube_url"`
}

func ToProjectLinksResponse(
	links models.ProjectLinks,
) ProjectLinksResponse {
	return ProjectLinksResponse{
		ProjectID:     links.ProjectID,
		SpotifyURL:    utils.NullStringToPointer(links.SpotifyURL),
		DeezerURL:     utils.NullStringToPointer(links.DeezerURL),
		AppleMusicURL: utils.NullStringToPointer(links.AppleMusicURL),
		SoundcloudURL: utils.NullStringToPointer(links.SoundcloudURL),
		YoutubeURL:    utils.NullStringToPointer(links.YoutubeURL),
	}
}
