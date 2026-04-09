package project

import "context"

func (r *ProjectRepository) RemoveArtist(
	ctx context.Context,
	projectID int64,
	artistID int64,
) error {
	const query = `
		DELETE FROM artist_projects
		WHERE project_id = $1
		  AND artist_id = $2;
	`

	_, err := r.db.ExecContext(ctx, query, projectID, artistID)
	if err != nil {
		return err
	}

	return nil
}
