package server

import (
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/config"
	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	"github.com/PtiCadri/studio/apps/api/internal/middleware"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
)

// NewRouter sets up the HTTP routes and handlers for the API.
func NewRouter(db *sql.DB, cfg config.Config) http.Handler {
	mux := http.NewServeMux()

	// Repositories
	artistRepo := postgres.NewArtistRepository(db)
	eventRepo := postgres.NewEventRepository(db)

	// Handlers
	artistHandler := handlers.NewArtistHandler(artistRepo)
	eventHandler := handlers.NewEventHandler(eventRepo)

	// Middleware admin
	adminMw := middleware.AdminMiddleware(cfg.AdminToken)

	/* =======================
	   Routes PUBLIQUES
	   ======================= */

	// GET /artists
	mux.HandleFunc("/artists", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			artistHandler.GetAllArtists(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	// GET /events
	mux.HandleFunc("/events", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			eventHandler.GetUpcomingEvents(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	/* =======================
	   Routes ADMIN (protégées)
	   ======================= */

	// POST /admin/artists
	mux.Handle("/admin/artists/", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodPost:
			artistHandler.CreateArtist(w, r)
		case http.MethodPut:
			artistHandler.UpdateArtist(w, r)
		case http.MethodDelete:
			artistHandler.DeleteArtist(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})))

	// POST /admin/events
	mux.Handle("/admin/events/", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodPost:
			eventHandler.CreateEvent(w, r)
		case http.MethodPut:
			eventHandler.UpdateEvent(w, r)
		case http.MethodDelete:
			eventHandler.DeleteEvent(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})))

	/* =======================
	   Healthcheck (optionnel)
	   ======================= */

	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})

	return mux
}
