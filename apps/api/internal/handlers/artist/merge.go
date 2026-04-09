package artist

import (
	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
	artistReq "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func mergeArtistPatch(
	current models.Artist,
	request artistReq.PatchArtist,
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
