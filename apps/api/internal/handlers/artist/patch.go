package artist

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistRequests "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Artists) Patch(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistRequests.PatchArtist

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentArtist, err := h.artistRepo.GetByID(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist", http.StatusInternalServerError)
		return
	}

	name := currentArtist.Name
	if request.Name != nil {
		name = *request.Name
	}

	var imageURL *string

	if currentArtist.ImageURL.Valid {
		imageURL = &currentArtist.ImageURL.String
	}

	if request.ImageURL != nil {
		imageURL = request.ImageURL
	}

	artist, err := h.artistRepo.Update(
		r.Context(),
		artistID,
		name,
		imageURL,
	)
	if err != nil {
		http.Error(w, "failed to update artist", http.StatusInternalServerError)
		return
	}

	response := artistResponse.ArtistResponse{
		ID:        artist.ID,
		Name:      artist.Name,
		ImageURL:  utils.NullStringToPointer(artist.ImageURL),
		CreatedAt: artist.CreatedAt,
		UpdatedAt: artist.UpdatedAt,
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(w, "failed to encode artist", http.StatusInternalServerError)
	}
}
