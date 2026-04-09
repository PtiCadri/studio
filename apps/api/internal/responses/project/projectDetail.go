package project

import (
	"time"

	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

type ProjectDetailResponse struct {
	ID        int64                       `json:"id"`
	Name      string                      `json:"name"`
	ImageURL  *string                     `json:"image_url"`
	CreatedAt time.Time                   `json:"created_at"`
	UpdatedAt time.Time                   `json:"updated_at"`
	Artists   []artistResp.ArtistResponse `json:"artists"`
}

func ToProjectDetailResponse(
	project models.Project,
	artists []models.Artist,
) ProjectDetailResponse {
	base := ToProjectResponse(project)

	return ProjectDetailResponse{
		ID:        base.ID,
		Name:      base.Name,
		ImageURL:  base.ImageURL,
		CreatedAt: base.CreatedAt,
		UpdatedAt: base.UpdatedAt,
		Artists:   toArtistResponses(artists),
	}
}

func toArtistResponses(artists []models.Artist) []artistResp.ArtistResponse {
	response := make([]artistResp.ArtistResponse, 0, len(artists))

	for _, artist := range artists {
		response = append(response, artistResp.ToArtistResponse(artist))
	}

	return response
}
