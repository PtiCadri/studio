package project

import "context"

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
