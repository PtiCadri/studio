package repository

import (
	"context"
	"database/sql"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

type ArtistRepository struct {
	db *sql.DB
}

func NewArtist(db *sql.DB) *ArtistRepository {
	return &ArtistRepository{db: db}
}

func (r ArtistRepository) Create(
	ctx context.Context,
	name string,
	imageURL *string,
) (models.Artist, error) {
	const query = `
		INSERT INTO artists (
			name,
			image_url
		)
		VALUES ($1, $2)
		RETURNING
			id,
			name,
			image_url,
			created_at,
			updated_at;
	`

	var artist models.Artist

	err := r.db.QueryRowContext(
		ctx,
		query,
		name,
		imageURL,
	).Scan(
		&artist.ID,
		&artist.Name,
		&artist.ImageURL,
		&artist.CreatedAt,
		&artist.UpdatedAt,
	)
	if err != nil {
		return models.Artist{}, err
	}

	return artist, nil
}
