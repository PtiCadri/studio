package domain

import (
	"time"

	"github.com/google/uuid"
)

type Artist struct {
	ID         uuid.UUID `json:"id"`
	Name       string    `json:"name"`
	ImageURL   string    `json:"image_url"`
	ExtractURL string    `json:"extract_url"`
	MediaURL   string    `json:"media_url"`
	CreatedAt  time.Time `json:"created_at"`
}

type UpdateArtistInput struct {
	Name       string `json:"name"`
	ImageURL   string `json:"image_url"`
	ExtractURL string `json:"extract_url"`
	MediaURL   string `json:"media_url"`
}
