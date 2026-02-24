package server

import (
	"database/sql"
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
)

// func NewRouter(db *sql.DB) http.Handler {
// 	mux := http.NewServeMux()

// 	health := handlers.NewHealth(db)
// 	mux.HandleFunc("/health", health.Get)

// 	return mux
// }

func NewRouter(db *sql.DB) http.Handler {
	mux := http.NewServeMux()

	artistRepo := postgres.NewArtistRepository(db)
	eventRepo := postgres.NewEventRepository(db)

	mux.HandleFunc("/artists", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {

		case http.MethodPost:
			var artist domain.Artist
			if err := json.NewDecoder(r.Body).Decode(&artist); err != nil {
				http.Error(w, "invalid body", http.StatusBadRequest)
				return
			}
			if err := artistRepo.CreateArtist(r.Context(), &artist); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			json.NewEncoder(w).Encode(artist)

		case http.MethodGet:
			artists, err := artistRepo.GetAllArtists(r.Context())
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			json.NewEncoder(w).Encode(artists)

		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})

	mux.HandleFunc("/events", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {

		case http.MethodPost:
			var event domain.Event
			if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
				http.Error(w, "invalid body", http.StatusBadRequest)
				return
			}
			if err := eventRepo.CreateEvent(r.Context(), &event); err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			json.NewEncoder(w).Encode(event)

		case http.MethodGet:
			events, err := eventRepo.GetUpcomingEvents(r.Context())
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			json.NewEncoder(w).Encode(events)

		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	})
	return mux
}
