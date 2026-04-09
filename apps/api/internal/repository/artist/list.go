package artist

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ArtistRepository) List(
	ctx context.Context,
) ([]models.Artist, error) {
	const query = `
		SELECT
			id,
			name,
			image_url,
			created_at,
			updated_at
		FROM artists
		ORDER BY id DESC;
	`

	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	artists := make([]models.Artist, 0)

	for rows.Next() {
		var artist models.Artist

		err := rows.Scan(
			&artist.ID,
			&artist.Name,
			&artist.ImageURL,
			&artist.CreatedAt,
			&artist.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		artists = append(artists, artist)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return artists, nil
}
