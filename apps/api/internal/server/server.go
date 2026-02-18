package server

import (
	"log"
	"net/http"
)

type Server struct {
	httpServer *http.Server
}

func New(addr string, handler http.Handler) *Server {
	return &Server{
		httpServer: &http.Server{
			Addr:    addr,
			Handler: handler,
		},
	}
}

func (s *Server) Start() error {
	log.Printf("API listening on %s", s.httpServer.Addr)
	return s.httpServer.ListenAndServe()
}
