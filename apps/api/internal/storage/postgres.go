package storage

import (
	"database/sql"
	"log"
	"time"

	_ "github.com/jackc/pgx/v5/stdlib"
)

// Postgres encapsulates the database connection for PostgreSQL.
type Postgres struct {
	DB *sql.DB
}

// NewPostgres establishes a new connection to the PostgreSQL database using the provided database URL.
func NewPostgres(databaseURL string) (*Postgres, error) {
	db, err := sql.Open("pgx", databaseURL)
	if err != nil {
		return nil, err
	}

	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(5)
	db.SetConnMaxLifetime(30 * time.Minute)

	if err := db.Ping(); err != nil {
		_ = db.Close()
		return nil, err
	}

	log.Println("Connected to PostgreSQL database successfully")

	return &Postgres{DB: db}, nil
}
