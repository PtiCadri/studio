package project

import (
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func (h Handler) RemoveArtist(w http.ResponseWriter, r *http.Request) {
	projectIDStr := chi.URLParam(r, "id")
	projectID, err := strconv.ParseInt(projectIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	artistIDStr := chi.URLParam(r, "artistId")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	err = h.projectRepo.RemoveArtist(r.Context(), projectID, artistID)
	if err != nil {
		http.Error(
			w,
			"failed to unlink artist from project",
			http.StatusInternalServerError,
		)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
