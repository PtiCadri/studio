package project

import (
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) Delete(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	err = h.projectRepo.Delete(r.Context(), projectID)
	if err != nil {
		http.Error(w, "failed to delete project", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusNoContent)
}
