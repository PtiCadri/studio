package server

import (
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/config"
	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	"github.com/PtiCadri/studio/apps/api/internal/middleware"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
)

// func NewRouter(db *sql.DB) http.Handler {
// 	mux := http.NewServeMux()

// 	health := handlers.NewHealth(db)
// 	mux.HandleFunc("/health", health.Get)

// 	return mux
// }

// func NewRouter(db *sql.DB) http.Handler {
// 	mux := http.NewServeMux()

// 	artistRepo := postgres.NewArtistRepository(db)
// 	eventRepo := postgres.NewEventRepository(db)

// 	mux.HandleFunc("/artists", func(w http.ResponseWriter, r *http.Request) {
// 		switch r.Method {

// 		case http.MethodPost:
// 			var artist domain.Artist
// 			if err := json.NewDecoder(r.Body).Decode(&artist); err != nil {
// 				http.Error(w, "invalid body", http.StatusBadRequest)
// 				return
// 			}
// 			if err := artistRepo.CreateArtist(r.Context(), &artist); err != nil {
// 				http.Error(w, err.Error(), http.StatusInternalServerError)
// 				return
// 			}
// 			json.NewEncoder(w).Encode(artist)

// 		case http.MethodGet:
// 			artists, err := artistRepo.GetAllArtists(r.Context())
// 			if err != nil {
// 				http.Error(w, err.Error(), http.StatusInternalServerError)
// 				return
// 			}
// 			json.NewEncoder(w).Encode(artists)

// 		default:
// 			w.WriteHeader(http.StatusMethodNotAllowed)
// 		}
// 	})

// 	mux.Handle("/admin/artists/", adminMw(http.HandleFunc(func(w http.ResponseWriter, r *http.Request) {
// 		switch r.Method {
// 		case http.MethodPut:
// 			artistHandler.UpdateArtist(w, r)
// 		}
// 	})))

// 	mux.HandleFunc("/events", func(w http.ResponseWriter, r *http.Request) {
// 		switch r.Method {

// 		case http.MethodPost:
// 			var event domain.Event
// 			if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
// 				http.Error(w, "invalid body", http.StatusBadRequest)
// 				return
// 			}
// 			if err := eventRepo.CreateEvent(r.Context(), &event); err != nil {
// 				http.Error(w, err.Error(), http.StatusInternalServerError)
// 				return
// 			}
// 			json.NewEncoder(w).Encode(event)

// 		case http.MethodGet:
// 			events, err := eventRepo.GetUpcomingEvents(r.Context())
// 			if err != nil {
// 				http.Error(w, err.Error(), http.StatusInternalServerError)
// 				return
// 			}
// 			json.NewEncoder(w).Encode(events)

// 		default:
// 			w.WriteHeader(http.StatusMethodNotAllowed)
// 		}
// 	})
// 	return mux
// }

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
	mux.Handle("/admin/artists", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodPost:
			artistHandler.CreateArtist(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})))

	// PUT /admin/artists/{id}
	// DELETE /admin/artists/{id}
	mux.Handle("/admin/artists/", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodPut:
			artistHandler.UpdateArtist(w, r)
		case http.MethodDelete:
			artistHandler.DeleteArtist(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})))

	// POST /admin/events
	mux.Handle("/admin/events", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodPost:
			eventHandler.CreateEvent(w, r)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})))

	// PUT /admin/events/{id}
	// DELETE /admin/events/{id}
	mux.Handle("/admin/events/", adminMw(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
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
