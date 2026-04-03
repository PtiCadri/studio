package artistHandler

import (
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func (h Artists) Delete(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	err = h.artistRepo.Delete(r.Context(), artistID)
	if err != nil {
		http.Error(w, "failed to delete artist", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
