package config

import "os"

type Config struct {
	Port        string
	DatabaseUrl string
	AuthSecret  string
	FrontendUrl string
}

func Load() Config {
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8080"
	}

	return Config{
		Port:        port,
		DatabaseUrl: os.Getenv("DATABASE_URL"),
		AuthSecret:  os.Getenv("AUTH_SECRET"),
		FrontendUrl: os.Getenv("FRONTEND_URL"),
	}
}
