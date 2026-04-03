package main

import (
	"context"
	"log"
	"os"

	"golang.org/x/crypto/bcrypt"

	"github.com/PtiCadri/studio/apps/api/internal/config"
	adminRepo "github.com/PtiCadri/studio/apps/api/internal/repository/admins"
	"github.com/PtiCadri/studio/apps/api/internal/storage"
)

func main() {
	cfg := config.Load()

	email := os.Getenv("ADMIN_EMAIL")
	password := os.Getenv("ADMIN_PASSWORD")

	if email == "" {
		log.Fatal("ADMIN_EMAIL is required")
	}

	if password == "" {
		log.Fatal("ADMIN_PASSWORD is required")
	}

	pg, err := storage.NewPostgres(cfg.DatabaseUrl)
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}
	defer pg.DB.Close()

	passwordHash, err := bcrypt.GenerateFromPassword(
		[]byte(password),
		bcrypt.DefaultCost,
	)
	if err != nil {
		log.Fatalf("failed to hash password: %v", err)
	}

	adminRepo := adminRepo.New(pg.DB)

	admin, err := adminRepo.Create(
		context.Background(),
		email,
		string(passwordHash),
	)
	if err != nil {
		log.Fatalf("failed to create admin user: %v", err)
	}

	log.Printf("admin user created: id=%d email=%s", admin.ID, admin.Email)
}
