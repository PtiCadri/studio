package models

import "database/sql"

type ArtistIntegrations struct {
	ArtistID           int64          `json:"artist_id" db:"artist_id"`
	SpotifyEmbedURL    sql.NullString `json:"spotify_embed_url" db:"spotify_embed_url"`
	DeezerEmbedURL     sql.NullString `json:"deezer_embed_url" db:"deezer_embed_url"`
	AppleMusicEmbedURL sql.NullString `json:"apple_music_embed_url" db:"apple_music_embed_url"`
}
