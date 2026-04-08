package server

import (
	"database/sql"
	"net/http"

	"github.com/go-chi/chi/v5"

	"github.com/PtiCadri/studio/apps/api/internal/config"
	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	adminHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/admin"
	artistHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/artist"
	projectHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/project"
	uploadHandlers "github.com/PtiCadri/studio/apps/api/internal/handlers/uploads"

	adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admin"
	artistRepo "github.com/PtiCadri/studio/apps/api/internal/repository/artist"
	projectRepo "github.com/PtiCadri/studio/apps/api/internal/repository/project"

	"github.com/PtiCadri/studio/apps/api/internal/middleware"
)

func NewRouter(db *sql.DB, cfg config.Config) http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.CORS(cfg.FrontendUrl))

	// =========================
	// Dependencies
	// =========================

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

	uploadsHandler := uploadHandlers.New()

	// =========================
	// Static file serving
	// =========================

	fileServer := http.FileServer(http.Dir("./uploads"))
	r.Handle("/uploads/*", http.StripPrefix("/uploads/", fileServer))

	// =========================
	// Health
	// =========================

	r.Get("/health", health.Get)

	// =========================
	// Admin (protected)
	// =========================

	r.Route("/admin", func(r chi.Router) {
		// Public admin route
		r.Post("/login", adminsHandler.Login)

		// Protected routes
		r.Group(func(r chi.Router) {
			r.Use(middleware.AdminAuth(cfg.AuthSecret))

			// Uploads
			r.Post("/uploads", uploadsHandler.Create)

			// =========================
			// Projects
			// =========================

			r.Post("/projects", projectsHandler.Create)
			r.Delete("/projects/{id}", projectsHandler.Delete)

			r.Patch("/projects/{id}", projectsHandler.Patch)

			r.Put("/projects/{id}/links", projectsHandler.PutLinks)
			r.Patch("/projects/{id}/links", projectsHandler.PatchLinks)

			r.Put("/projects/{id}/integrations", projectsHandler.PutIntegrations)
			r.Patch("/projects/{id}/integrations", projectsHandler.PatchIntegrations)

			r.Post("/projects/{id}/artists", projectsHandler.AddArtist)
			r.Delete("/projects/{id}/artists/{artistId}", projectsHandler.RemoveArtist)

			// =========================
			// Artists
			// =========================

			r.Post("/artists", artistsHandler.Create)
			r.Delete("/artists/{id}", artistsHandler.Delete)

			r.Patch("/artists/{id}", artistsHandler.Patch)

			r.Put("/artists/{id}/links", artistsHandler.PutLinks)
			r.Patch("/artists/{id}/links", artistsHandler.PatchLinks)

			r.Put("/artists/{id}/integrations", artistsHandler.PutIntegrations)
			r.Patch("/artists/{id}/integrations", artistsHandler.PatchIntegrations)
		})
	})

	// =========================
	// Public routes
	// =========================

	r.Route("/projects", func(r chi.Router) {
		r.Get("/", projectsHandler.List)
		r.Get("/{id}", projectsHandler.GetByID)

		r.Get("/{id}/links", projectsHandler.GetLinks)
		r.Get("/{id}/integrations", projectsHandler.GetIntegrations)
	})

	r.Route("/artists", func(r chi.Router) {
		r.Get("/", artistsHandler.List)
		r.Get("/{id}", artistsHandler.GetByID)

		r.Get("/{id}/links", artistsHandler.GetLinks)
		r.Get("/{id}/integrations", artistsHandler.GetIntegrations)
	})

	return r
}
