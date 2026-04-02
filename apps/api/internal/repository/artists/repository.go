package artistRepo

import "database/sql"

type ArtistRepository struct {
	db *sql.DB
}

func New(db *sql.DB) *ArtistRepository {
	return &ArtistRepository{db: db}
}
