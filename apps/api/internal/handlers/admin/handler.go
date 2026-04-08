package admin

import (
	adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admin"
)

type Admin struct {
	adminRepo  *adminRepo.AdminRepository
	authSecret string
}

// New returns a new Admins instance with the given adminRepo and authSecret.
// The adminRepo is used to interact with the admin_users table in the database.
// The authSecret is used to sign the admin session cookie.
func New(
	adminRepo *adminRepo.AdminRepository,
	authSecret string,
) Admin {
	return Admin{
		adminRepo:  adminRepo,
		authSecret: authSecret,
	}
}
