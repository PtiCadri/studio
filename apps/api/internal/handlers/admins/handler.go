package adminHandler

import (
	adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admins"
)

type Admins struct {
	adminRepo  *adminRepo.AdminRepository
	authSecret string
}

func New(
	adminRepo *adminRepo.AdminRepository,
	authSecret string,
) Admins {
	return Admins{
		adminRepo:  adminRepo,
		authSecret: authSecret,
	}
}
