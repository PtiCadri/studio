package models

import "database/sql"

type ProjectLinks struct {
	ProjectID     int64          `json:"project_id" db:"project_id"`
	SpotifyURL    sql.NullString `json:"spotify_url" db:"spotify_url"`
	DeezerURL     sql.NullString `json:"deezer_url" db:"deezer_url"`
	AppleMusicURL sql.NullString `json:"apple_music_url" db:"apple_music_url"`
	SoundcloudURL sql.NullString `json:"soundcloud_url" db:"soundcloud_url"`
	YoutubeURL    sql.NullString `json:"youtube_url" db:"youtube_url"`
}
