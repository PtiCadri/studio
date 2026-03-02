package config

import "os"

// Config holds the configuration values for the API server.
type Config struct {
	Port        string
	DatabaseUrl string
	AdminToken  string
}

// Load reads the configuration from environment variables and returns a Config struct.
func Load() Config {
	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8080"
	}

	return Config{
		Port:        port,
		DatabaseUrl: os.Getenv("DATABASE_URL"),
		AdminToken:  os.Getenv("ADMIN_TOKEN"),
	}
}
