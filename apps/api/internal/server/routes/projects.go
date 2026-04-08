package routes

import "github.com/go-chi/chi/v5"

func RegisterProjects(r chi.Router, deps Dependencies) {
	r.Route("/projects", func(r chi.Router) {
		r.Get("/", deps.Projects.List)
		r.Get("/{id}", deps.Projects.GetByID)
		r.Get("/{id}/links", deps.Projects.GetLinks)
		r.Get("/{id}/integrations", deps.Projects.GetIntegrations)
	})
}
