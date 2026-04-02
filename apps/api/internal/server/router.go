package server

import (
	"database/sql"
	"net/http"

	"github.com/go-chi/chi/v5"

	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	artistHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/artists"
	projectHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/projects"
	artistRepo "github.com/PtiCadri/studio/apps/api/internal/repository/artists"
	projectRepo "github.com/PtiCadri/studio/apps/api/internal/repository/projects"
)

func NewRouter(db *sql.DB) http.Handler {
	r := chi.NewRouter()

	health := handlers.NewHealth(db)

	projectsRepository := projectRepo.New(db)
	projectsHandler := projectHandlers.New(projectsRepository)

	artistsRepository := artistRepo.New(db)
	artistsHandler := artistHandlers.New(artistsRepository)

	r.Get("/health", health.Get)

	r.Route("/projects", func(r chi.Router) {
		r.Get("/", projectsHandler.List)
		r.Post("/", projectsHandler.Create)
		r.Get("/{id}", projectsHandler.GetByID)
		r.Post("/{id}/artists", projectsHandler.AddArtist)
		r.Delete("/{id}/artists/{artistId}", projectsHandler.RemoveArtist)
	})

	r.Route("/artists", func(r chi.Router) {
		r.Get("/", artistsHandler.List)
		r.Post("/", artistsHandler.Create)
	})

	return r
}
