package project

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	projectResponse "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func toProjectResponse(project models.Project) projectResponse.ProjectResponse {
	return projectResponse.ProjectResponse{
		ID:        project.ID,
		Name:      project.Name,
		ImageURL:  utils.NullStringToPointer(project.ImageURL),
		CreatedAt: project.CreatedAt,
		UpdatedAt: project.UpdatedAt,
	}
}

func toProjectDetailResponse(
	project models.Project,
	artists []models.Artist,
) projectResponse.ProjectDetailResponse {
	base := toProjectResponse(project)

	return projectResponse.ProjectDetailResponse{
		ID:        base.ID,
		Name:      base.Name,
		ImageURL:  base.ImageURL,
		CreatedAt: base.CreatedAt,
		UpdatedAt: base.UpdatedAt,
		Artists:   toArtistResponses(artists),
	}
}

func toArtistResponse(artist models.Artist) artistResponse.ArtistResponse {
	return artistResponse.ArtistResponse{
		ID:        artist.ID,
		Name:      artist.Name,
		ImageURL:  utils.NullStringToPointer(artist.ImageURL),
		CreatedAt: artist.CreatedAt,
		UpdatedAt: artist.UpdatedAt,
	}
}

func toArtistResponses(artists []models.Artist) []artistResponse.ArtistResponse {
	response := make([]artistResponse.ArtistResponse, 0, len(artists))

	for _, artist := range artists {
		response = append(response, toArtistResponse(artist))
	}

	return response
}
