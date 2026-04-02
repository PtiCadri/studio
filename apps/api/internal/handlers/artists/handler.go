package artistHandler

import repository_artists "github.com/PtiCadri/studio/apps/api/internal/repository/artists"

type Artists struct {
	artistRepo *repository_artists.ArtistRepository
}

func New(artistRepo *repository_artists.ArtistRepository) Artists {
	return Artists{artistRepo: artistRepo}
}
