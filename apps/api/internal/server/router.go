package server

import (
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/handlers"
	"github.com/PtiCadri/studio/apps/api/internal/repository"
)

func NewRouter(db *sql.DB) http.Handler {
	mux := http.NewServeMux()

	health := handlers.NewHealth(db)
	projectRepo := repository.NewProject(db)
	projects := handlers.NewProjects(*projectRepo)

	mux.HandleFunc("/health", health.Get)

	mux.HandleFunc("/projects", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			projects.List(w, r)
		case http.MethodPost:
			projects.Create(w, r)
		default:
			http.Error(
				w,
				"method not allowed",
				http.StatusMethodNotAllowed,
			)
		}
	})

	return mux
}
