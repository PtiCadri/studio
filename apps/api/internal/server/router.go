package server

import (
	"database/sql"
	"net/http"

	"github.com/go-chi/chi/v5"

	"github.com/PtiCadri/studio/apps/api/internal/config"
	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	adminHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/admins"
	artistHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/artists"
	projectHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/projects"
	adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admins"
	artistRepo "github.com/PtiCadri/studio/apps/api/internal/repository/artists"
	projectRepo "github.com/PtiCadri/studio/apps/api/internal/repository/projects"
)

func NewRouter(db *sql.DB, cfg config.Config) http.Handler {
	r := chi.NewRouter()

	health := handlers.NewHealth(db)

	projectsRepository := projectRepo.New(db)
	projectsHandler := projectHandlers.New(projectsRepository)

	artistsRepository := artistRepo.New(db)
	artistsHandler := artistHandlers.New(artistsRepository)

	adminsRepository := adminRepo.New(db)
	adminsHandler := adminHandlers.New(
		adminsRepository,
		cfg.AuthSecret,
	)

	r.Get("/health", health.Get)

	r.Route("/admin", func(r chi.Router) {
		r.Post("/login", adminsHandler.Login)
	})

	r.Route("/projects", func(r chi.Router) {
		r.Get("/", projectsHandler.List)
		r.Post("/", projectsHandler.Create)
		r.Get("/{id}", projectsHandler.GetByID)
		r.Put("/{id}/links", projectsHandler.PutLinks)
		r.Get("/{id}/links", projectsHandler.GetLinks)
		r.Put("/{id}/integrations", projectsHandler.PutIntegrations)
		r.Get("/{id}/integrations", projectsHandler.GetIntegrations)
		r.Post("/{id}/artists", projectsHandler.AddArtist)
		r.Delete("/{id}/artists/{artistId}", projectsHandler.RemoveArtist)
	})

	r.Route("/artists", func(r chi.Router) {
		r.Get("/", artistsHandler.List)
		r.Post("/", artistsHandler.Create)
		r.Put("/{id}/links", artistsHandler.PutLinks)
		r.Get("/{id}/links", artistsHandler.GetLinks)
		r.Put("/{id}/integrations", artistsHandler.PutIntegrations)
		r.Get("/{id}/integrations", artistsHandler.GetIntegrations)
	})

	return r
}
