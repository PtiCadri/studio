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

	"github.com/PtiCadri/studio/apps/api/internal/middleware"
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

	// Protected routes
	r.Route("/admin", func(r chi.Router) {
		r.Post("/login", adminsHandler.Login)

		r.Group(func(r chi.Router) {
			r.Use(middleware.AdminAuth(cfg.AuthSecret))

			// Projects
			r.Post("/projects", projectsHandler.Create)
			r.Delete("/projects/{id}", projectsHandler.Delete)
			r.Put("/projects/{id}/links", projectsHandler.PutLinks)
			r.Put("/projects/{id}/integrations", projectsHandler.PutIntegrations)
			r.Post("/projects/{id}/artists", projectsHandler.AddArtist)
			r.Patch("/projects/{id}", projectsHandler.Patch)
			r.Delete("/projects/{id}/artists/{artistId}", projectsHandler.RemoveArtist)

			// Artists
			r.Post("/artists", artistsHandler.Create)
			r.Put("/artists/{id}/links", artistsHandler.PutLinks)
			r.Put("/artists/{id}/integrations", artistsHandler.PutIntegrations)
		})
	})

	// Public routes
	r.Route("/projects", func(r chi.Router) {
		r.Get("/", projectsHandler.List)
		r.Get("/{id}", projectsHandler.GetByID)
		r.Get("/{id}/links", projectsHandler.GetLinks)
		r.Get("/{id}/integrations", projectsHandler.GetIntegrations)
	})

	r.Route("/artists", func(r chi.Router) {
		r.Get("/", artistsHandler.List)
		r.Get("/{id}/links", artistsHandler.GetLinks)
		r.Get("/{id}/integrations", artistsHandler.GetIntegrations)
	})

	return r
}
