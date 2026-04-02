package models

import "database/sql"

type ProjectIntegrations struct {
	ProjectID          int64          `json:"project_id" db:"project_id"`
	SpotifyEmbedURL    sql.NullString `json:"spotify_embed_url" db:"spotify_embed_url"`
	DeezerEmbedURL     sql.NullString `json:"deezer_embed_url" db:"deezer_embed_url"`
	AppleMusicEmbedURL sql.NullString `json:"apple_music_embed_url" db:"apple_music_embed_url"`
	SoundcloudEmbedURL sql.NullString `json:"soundcloud_embed_url" db:"soundcloud_embed_url"`
}
