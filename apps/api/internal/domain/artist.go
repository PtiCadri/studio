package domain

import (
	"time"

	"github.com/google/uuid"
)

type Artist struct {
	ID         uuid.UUID
	Name       string
	ImageURL   string
	ExtractURL string
	MediaURL   string
	CreatedAt  time.Time
}
