package artist

import repository_artists "github.com/PtiCadri/studio/apps/api/internal/repository/artist"

type Artists struct {
	artistRepo *repository_artists.ArtistRepository
}

func New(artistRepo *repository_artists.ArtistRepository) Artists {
	return Artists{artistRepo: artistRepo}
}
