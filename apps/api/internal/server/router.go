package server

import (
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/handlers"
)

func NewRouter(db *sql.DB) http.Handler {
	mux := http.NewServeMux()

	health := handlers.NewHealth(db)
	mux.HandleFunc("/health", health.Get)

	return mux
}
