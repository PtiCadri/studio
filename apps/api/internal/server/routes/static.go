package routes

import (
	"net/http"

	"github.com/go-chi/chi/v5"
)

func RegisterStatic(r chi.Router) {
	fileServer := http.FileServer(http.Dir("./uploads"))
	r.Handle("/uploads/*", http.StripPrefix("/uploads/", fileServer))
}
