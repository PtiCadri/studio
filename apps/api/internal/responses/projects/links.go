package projectResponse

type ProjectLinksResponse struct {
	ProjectID     int64   `json:"project_id"`
	SpotifyURL    *string `json:"spotify_url"`
	DeezerURL     *string `json:"deezer_url"`
	AppleMusicURL *string `json:"apple_music_url"`
	SoundcloudURL *string `json:"soundcloud_url"`
	YoutubeURL    *string `json:"youtube_url"`
}
