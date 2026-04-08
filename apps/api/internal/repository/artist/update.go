package artist

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ArtistRepository) Update(
	ctx context.Context,
	id int64,
	name string,
	imageURL *string,
) (models.Artist, error) {
	const query = `
		UPDATE artists
		SET
			name = $2,
			image_url = $3,
			updated_at = NOW()
		WHERE id = $1
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
		id,
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
