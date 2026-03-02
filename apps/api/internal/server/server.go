package server

import (
	"log"
	"net/http"
)

// Server represents the API server with its configuration and dependencies.
type Server struct {
	httpServer *http.Server
}

// New creates a new Server instance with the given address and HTTP handler.
func New(addr string, handler http.Handler) *Server {
	return &Server{
		httpServer: &http.Server{
			Addr:    addr,
			Handler: handler,
		},
	}
}

// Start runs the HTTP server and listens for incoming requests.
func (s *Server) Start() error {
	log.Printf("API listening on %s", s.httpServer.Addr)
	return s.httpServer.ListenAndServe()
}
