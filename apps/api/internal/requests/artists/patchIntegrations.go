package artistRequests

type PatchIntegrations struct {
	SpotifyEmbedURL    *string `json:"spotify_embed_url"`
	DeezerEmbedURL     *string `json:"deezer_embed_url"`
	AppleMusicEmbedURL *string `json:"apple_music_embed_url"`
	SoundcloudEmbedURL *string `json:"soundcloud_embed_url"`
}
