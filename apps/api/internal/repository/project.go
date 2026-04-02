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

func (r ProjectRepository) GetByID(
	ctx context.Context,
	id int64,
) (models.Project, error) {
	const query = `
		SELECT
			id,
			name,
			image_url,
			created_at,
			updated_at
		FROM projects
		WHERE id = $1;
	`

	var project models.Project

	err := r.db.QueryRowContext(ctx, query, id).Scan(
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

func (r ProjectRepository) GetArtistsByProjectID(
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

func (r ProjectRepository) AddArtist(
	ctx context.Context,
	projectID int64,
	artistID int64,
) error {
	const query = `
		INSERT INTO artist_projects (
			artist_id,
			project_id
		)
		VALUES ($1, $2)
		ON CONFLICT DO NOTHING;
	`

	_, err := r.db.ExecContext(
		ctx,
		query,
		artistID,
		projectID,
	)
	if err != nil {
		return err
	}

	return nil
}
