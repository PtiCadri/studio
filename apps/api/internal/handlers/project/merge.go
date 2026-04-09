package project

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	projectReq "github.com/PtiCadri/studio/apps/api/internal/requests/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func mergeProjectPatch(
	current models.Project,
	request projectReq.PatchProject,
) (string, *string) {
	name := current.Name
	if request.Name != nil {
		name = *request.Name
	}

	imageURL := utils.NullStringToPointer(current.ImageURL)
	if request.ImageURL != nil {
		imageURL = request.ImageURL
	}

	return name, imageURL
}
