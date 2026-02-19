package domain

import (
	"time"

	"github.com/google/uuid"
)

type Event struct {
	ID          uuid.UUID
	Name        string
	Description string
	location    string
	EventDate   time.Time
	CreatedAt   time.Time
}
