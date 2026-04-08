package admin

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *AdminRepository) Create(
	ctx context.Context,
	email string,
	passwordHash string,
) (models.Admin, error) {
	const query = `
		INSERT INTO admin_users (
			email,
			password_hash
		)
		VALUES ($1, $2)
		RETURNING
			id,
			email,
			password_hash,
			created_at,
			updated_at;
	`

	var admin models.Admin

	err := r.db.QueryRowContext(
		ctx,
		query,
		email,
		passwordHash,
	).Scan(
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
