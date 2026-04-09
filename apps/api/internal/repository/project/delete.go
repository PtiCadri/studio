package project

import "context"

func (r *ProjectRepository) Delete(
	ctx context.Context,
	id int64,
) error {
	const query = `
		DELETE FROM projects
		WHERE id = $1;
	`

	_, err := r.db.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}

	return nil
}
