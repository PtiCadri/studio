package project

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ProjectRepository) Update(
	ctx context.Context,
	id int64,
	name string,
	imageURL *string,
) (models.Project, error) {
	const query = `
		UPDATE projects
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

	var project models.Project

	err := r.db.QueryRowContext(
		ctx,
		query,
		id,
		name,
		imageURL,
	).Scan(
		&project.ID,
		&project.Name,
		&project.ImageURL,
		&project.CreatedAt,
		&project.UpdatedAt,
	)
	if err != nil {
		return models.Project{}, err
	}

	return project, nil
}
