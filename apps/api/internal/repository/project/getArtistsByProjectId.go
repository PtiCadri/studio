package project

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ProjectRepository) GetArtistsByProjectID(
	ctx context.Context,
	projectID int64,
) ([]models.Artist, error) {
	const query = `
		SELECT
			a.id,
			a.name,
			a.image_url,
			a.created_at,
			a.updated_at
		FROM artists a
		INNER JOIN artist_projects ap
			ON ap.artist_id = a.id
		WHERE ap.project_id = $1
		ORDER BY a.id DESC;
	`

	rows, err := r.db.QueryContext(ctx, query, projectID)
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
