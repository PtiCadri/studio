package project

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func (h Handler) AddArtist(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request struct {
		ArtistID int64 `json:"artist_id"`
	}

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	if request.ArtistID == 0 {
		http.Error(w, "artist_id is required", http.StatusBadRequest)
		return
	}

	err = h.projectRepo.AddArtist(
		r.Context(),
		projectID,
		request.ArtistID,
	)
	if err != nil {
		http.Error(
			w,
			"failed to link artist to project",
			http.StatusInternalServerError,
		)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
