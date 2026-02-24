package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
)

type ArtistHandler struct {
	repo *postgres.ArtistRepository
}

func NewArtistHandler(repo *postgres.ArtistRepository) *ArtistHandler {
	return &ArtistHandler{repo: repo}
}

func (h *ArtistHandler) Create(w http.ResponseWriter, r *http.Request) {
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

func (h *ArtistHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	artists, err := h.repo.GetAllArtists(r.Context())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(artists)
}
