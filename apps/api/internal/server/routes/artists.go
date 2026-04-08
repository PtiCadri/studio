package routes

import "github.com/go-chi/chi/v5"

func RegisterArtists(r chi.Router, deps Dependencies) {
	r.Route("/artists", func(r chi.Router) {
		r.Get("/", deps.Artists.List)
		r.Get("/{id}", deps.Artists.GetByID)
		r.Get("/{id}/links", deps.Artists.GetLinks)
		r.Get("/{id}/integrations", deps.Artists.GetIntegrations)
	})
}
