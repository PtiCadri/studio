package projectRepo

import "database/sql"

type ProjectRepository struct {
	db *sql.DB
}

func New(db *sql.DB) *ProjectRepository {
	return &ProjectRepository{db: db}
}
