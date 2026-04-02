package projectResponse

import (
	"time"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artists"
)

type ProjectDetailResponse struct {
	ID        int64                           `json:"id"`
	Name      string                          `json:"name"`
	ImageURL  *string                         `json:"image_url"`
	CreatedAt time.Time                       `json:"created_at"`
	UpdatedAt time.Time                       `json:"updated_at"`
	Artists   []artistResponse.ArtistResponse `json:"artists"`
}
