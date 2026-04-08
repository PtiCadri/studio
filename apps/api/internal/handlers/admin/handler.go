package admin

import adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admin"

type Handler struct {
	repo       *adminRepo.AdminRepository
	authSecret string
}

func New(
	repo *adminRepo.AdminRepository,
	authSecret string,
) Handler {
	return Handler{
		repo:       repo,
		authSecret: authSecret,
	}
}
