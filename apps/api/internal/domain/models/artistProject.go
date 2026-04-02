package models

type ArtistProject struct {
	ArtistID  int64 `json:"artist_id" db:"artist_id"`
	ProjectID int64 `json:"project_id" db:"project_id"`
}
