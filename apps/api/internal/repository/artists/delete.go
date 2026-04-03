package artistRepo

import "context"

func (r ArtistRepository) Delete(
	ctx context.Context,
	id int64,
) error {
	const query = `
		DELETE FROM artists
		WHERE id = $1;
	`

	_, err := r.db.ExecContext(ctx, query, id)
	if err != nil {
		return err
	}

	return nil
}
