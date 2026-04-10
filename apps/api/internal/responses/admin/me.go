package admin

import "github.com/PtiCadri/studio/apps/api/internal/domain/models"

type MeResponse struct {
	ID    int64  `json:"id"`
	Email string `json:"email"`
}

func ToMeResponse(admin models.Admin) MeResponse {
	return MeResponse{
		ID:    admin.ID,
		Email: admin.Email,
	}
}
