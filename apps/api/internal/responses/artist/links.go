package artist

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
