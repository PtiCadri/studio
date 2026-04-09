package artist

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type ArtistLinksResponse struct {
	ArtistID      int64   `json:"artist_id"`
	SpotifyURL    *string `json:"spotify_url"`
	DeezerURL     *string `json:"deezer_url"`
	AppleMusicURL *string `json:"apple_music_url"`
	SoundcloudURL *string `json:"soundcloud_url"`
	YoutubeURL    *string `json:"youtube_url"`
	InstagramURL  *string `json:"instagram_url"`
	TiktokURL     *string `json:"tiktok_url"`
}

func ToArtistLinksResponse(
	link models.ArtistLinks,
) ArtistLinksResponse {
	return ArtistLinksResponse{
		ArtistID:      link.ArtistID,
		SpotifyURL:    utils.NullStringToPointer(link.SpotifyURL),
		DeezerURL:     utils.NullStringToPointer(link.DeezerURL),
		AppleMusicURL: utils.NullStringToPointer(link.AppleMusicURL),
		SoundcloudURL: utils.NullStringToPointer(link.SoundcloudURL),
		YoutubeURL:    utils.NullStringToPointer(link.YoutubeURL),
		InstagramURL:  utils.NullStringToPointer(link.InstagramURL),
		TiktokURL:     utils.NullStringToPointer(link.TiktokURL),
	}
}
