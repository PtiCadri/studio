package routes

import "github.com/go-chi/chi/v5"

func RegisterHealth(r chi.Router, deps Dependencies) {
	r.Get("/health", deps.Health.Get)
}
