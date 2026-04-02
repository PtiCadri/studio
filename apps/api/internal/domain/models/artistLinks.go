package models

import "database/sql"

type ArtistLinks struct {
	ArtistID      int64          `json:"artist_id" db:"artist_id"`
	SpotifyURL    sql.NullString `json:"spotify_url" db:"spotify_url"`
	DeezerURL     sql.NullString `json:"deezer_url" db:"deezer_url"`
	AppleMusicURL sql.NullString `json:"apple_music_url" db:"apple_music_url"`
	SoundcloudURL sql.NullString `json:"soundcloud_url" db:"soundcloud_url"`
	YoutubeURL    sql.NullString `json:"youtube_url" db:"youtube_url"`
	InstagramURL  sql.NullString `json:"instagram_url" db:"instagram_url"`
	TiktokURL     sql.NullString `json:"tiktok_url" db:"tiktok_url"`
	FacebookURL   sql.NullString `json:"facebook_url" db:"facebook_url"`
}
