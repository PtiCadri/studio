package artist

import repository_artists "github.com/PtiCadri/studio/apps/api/internal/repository/artist"

type Handler struct {
	artistRepo *repository_artists.ArtistRepository
}

func New(artistRepo *repository_artists.ArtistRepository) Handler {
	return Handler{artistRepo: artistRepo}
}
