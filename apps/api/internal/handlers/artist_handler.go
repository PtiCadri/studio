package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
	"github.com/google/uuid"
)

// ArtistHandler handles HTTP requests related to artists.
type ArtistHandler struct {
	repo *postgres.ArtistRepository
}

// NewArtistHandler creates a new ArtistHandler with the given repository.
func NewArtistHandler(repo *postgres.ArtistRepository) *ArtistHandler {
	return &ArtistHandler{repo: repo}
}

// CreateArtist handles the creation of a new artist (admin side).
func (h *ArtistHandler) CreateArtist(w http.ResponseWriter, r *http.Request) {
	var artist domain.Artist

	if err := json.NewDecoder(r.Body).Decode(&artist); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}

	if err := h.repo.CreateArtist(r.Context(), &artist); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(artist)
}

// GetAllArtists handles the retrieval of all artists (public side).
func (h *ArtistHandler) GetAllArtists(w http.ResponseWriter, r *http.Request) {
	artists, err := h.repo.GetAllArtists(r.Context())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(artists)
}

// UpdateArtist handles the update of an existing artist (admin side).
func (h *ArtistHandler) UpdateArtist(w http.ResponseWriter, r *http.Request) {
	strId := strings.TrimPrefix(r.URL.Path, "/admin/artists/")
	id, err := uuid.Parse(strId)
	log.Printf("Updating artist with ID: %s\n", id)
	if err != nil {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}
	var input domain.UpdateArtistInput
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	artist := domain.Artist{
		ID:         id,
		Name:       input.Name,
		ImageURL:   input.ImageURL,
		ExtractURL: input.ExtractURL,
		MediaURL:   input.MediaURL,
	}
	if err := h.repo.UpdateArtist(r.Context(), &artist); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// DeleteArtist handles the deletion of an artist by ID (admin side).
func (h *ArtistHandler) DeleteArtist(w http.ResponseWriter, r *http.Request) {
	strId := strings.TrimPrefix(r.URL.Path, "/admin/artists/")
	id, err := uuid.Parse(strId)
	if err != nil {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}
	if err := h.repo.DeleteArtist(r.Context(), id); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
