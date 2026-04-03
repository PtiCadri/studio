package adminRepo

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r AdminRepository) GetByEmail(
	ctx context.Context,
	email string,
) (models.AdminUser, error) {
	const query = `
		SELECT
			id,
			email,
			password_hash,
			created_at,
			updated_at
		FROM admin_users
		WHERE email = $1;
	`

	var admin models.AdminUser

	err := r.db.QueryRowContext(ctx, query, email).Scan(
		&admin.ID,
		&admin.Email,
		&admin.PasswordHash,
		&admin.CreatedAt,
		&admin.UpdatedAt,
	)
	if err != nil {
		return models.AdminUser{}, err
	}

	return admin, nil
}
