package handlers

import (
	"database/sql"
	"net/http"
)

type Health struct {
	db *sql.DB
}

func NewHealth(db *sql.DB) Health {
	return Health{db: db}
}

func (h Health) Get(w http.ResponseWriter, _ *http.Request) {
	if err := h.db.Ping(); err != nil {
		http.Error(w, "database not ready", http.StatusServiceUnavailable)
		return
	}

	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("ok"))
}
