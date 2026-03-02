package postgres

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/google/uuid"
)

// ArtistRepository provides methods to interact with the artists table in the database.
type ArtistRepository struct {
	db *sql.DB
}

// NewArtistRepository creates a new ArtistRepository with the given database connection.
func NewArtistRepository(db *sql.DB) *ArtistRepository {
	return &ArtistRepository{db: db}
}

// CreateArtist inserts a new artist into the database and returns the created artist with its ID (admin side).
func (r *ArtistRepository) CreateArtist(ctx context.Context, artist *domain.Artist) error {
	query := `
	INSERT INTO artists (name, image_url, extract_url, media_url)
		VALUES ($1, $2, $3, $4)
		RETURNING id, created_at
	`
	fmt.Printf("Creating artist: %s\n", artist.Name)
	return r.db.QueryRowContext(
		ctx,
		query,
		artist.Name,
		artist.ImageURL,
		artist.ExtractURL,
		artist.MediaURL,
	).Scan(&artist.ID, &artist.CreatedAt)
}

// Get all artists from the database (public side).
func (r *ArtistRepository) GetAllArtists(ctx context.Context) ([]domain.Artist, error) {
	query := `
	SELECT id, name, image_url, extract_url, media_url, created_at
	FROM artists
	ORDER BY created_at DESC
	`
	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var artists []domain.Artist
	for rows.Next() {
		var artist domain.Artist
		if err := rows.Scan(
			&artist.ID,
			&artist.Name,
			&artist.ImageURL,
			&artist.ExtractURL,
			&artist.MediaURL,
			&artist.CreatedAt,
		); err != nil {
			return nil, err
		}
		artists = append(artists, artist)
	}
	fmt.Printf("Retrieved %d artists\n", len(artists))
	return artists, nil
}

// GetArtistByID retrieves an artist by its ID (admin side).
func (r *ArtistRepository) GetArtistByID(ctx context.Context, id int) (*domain.Artist, error) {
	query := `
	SELECT id, name, image_url, extract_url, media_url, created_at
	FROM artists
	WHERE id = $1
	`
	var artist domain.Artist
	err := r.db.QueryRowContext(ctx, query, id).Scan(
		&artist.ID,
		&artist.Name,
		&artist.ImageURL,
		&artist.ExtractURL,
		&artist.MediaURL,
		&artist.CreatedAt,
	)
	if err != nil {
		return nil, err
	}
	fmt.Printf("Retrieved artist with ID: %d\n", id)
	return &artist, nil
}

// UpdateArtist updates an existing artist in the database (admin side).
func (r *ArtistRepository) UpdateArtist(ctx context.Context, artist *domain.Artist) error {
	query := `
	UPDATE artists
	SET name = $1, image_url = $2, extract_url = $3, media_url = $4
	WHERE id = $5
	`
	_, err := r.db.ExecContext(
		ctx, query,
		artist.Name,
		artist.ImageURL,
		artist.ExtractURL,
		artist.MediaURL,
		artist.ID,
	)
	fmt.Printf("Updated artist with ID: %s\n", artist.ID)
	return err
}

// DeleteArtist deletes an artist from the database by its ID (admin side).
func (r *ArtistRepository) DeleteArtist(ctx context.Context, id uuid.UUID) error {
	query := `DELETE FROM artists WHERE id = $1`
	_, err := r.db.ExecContext(ctx, query, id)
	fmt.Printf("Deleted artist with ID: %s\n", id)
	return err
}
