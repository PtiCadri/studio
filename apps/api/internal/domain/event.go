package domain

import (
	"time"

	"github.com/google/uuid"
)

type Event struct {
	ID         uuid.UUID
	Name       string
	ImageURL   string
	ExtraitURL string
	MediaURL   string
	CreatedAt  time.Time
}
