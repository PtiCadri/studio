package domain

import (
	"time"

	"github.com/google/uuid"
)

// Artist represents a musical artist with relevant information.
type Artist struct {
	ID         uuid.UUID `json:"id"`
	Name       string    `json:"name"`
	ImageURL   string    `json:"image_url"`
	ExtractURL string    `json:"extract_url"`
	MediaURL   string    `json:"media_url"`
	CreatedAt  time.Time `json:"created_at"`
}

// UpdateArtistInput is used for updating an artist's information.
type UpdateArtistInput struct {
	Name       string `json:"name"`
	ImageURL   string `json:"image_url"`
	ExtractURL string `json:"extract_url"`
	MediaURL   string `json:"media_url"`
}
