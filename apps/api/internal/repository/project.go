package repository

import (
	"context"
	"database/sql"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

type ProjectRepository struct {
	db *sql.DB
}

func NewProject(db *sql.DB) *ProjectRepository {
	return &ProjectRepository{db: db}
}

func (r ProjectRepository) List(
	ctx context.Context,
) ([]models.Project, error) {
	const query = `
		SELECT
			id,
			name,
			image_url,
			created_at,
			updated_at
		FROM projects
		ORDER BY id DESC;
	`

	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	projects := make([]models.Project, 0)

	for rows.Next() {
		var project models.Project

		err := rows.Scan(
			&project.ID,
			&project.Name,
			&project.ImageURL,
			&project.CreatedAt,
			&project.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		projects = append(projects, project)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return projects, nil
}

func (r ProjectRepository) Create(
	ctx context.Context,
	name string,
	imageURL *string,
) (models.Project, error) {
	const query = `
		INSERT INTO projects (
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

	var project models.Project

	err := r.db.QueryRowContext(
		ctx,
		query,
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
