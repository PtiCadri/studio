package admin

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *AdminRepository) GetByID(
	ctx context.Context,
	id int64,
) (models.Admin, error) {
	const query = `
		SELECT
			id,
			email,
			password_hash,
			created_at,
			updated_at
		FROM admin_users
		WHERE id = $1;
	`

	var admin models.Admin

	err := r.db.QueryRowContext(ctx, query, id).Scan(
		&admin.ID,
		&admin.Email,
		&admin.PasswordHash,
		&admin.CreatedAt,
		&admin.UpdatedAt,
	)
	if err != nil {
		return models.Admin{}, err
	}

	return admin, nil
}
