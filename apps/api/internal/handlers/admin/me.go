package admin

import (
	"database/sql"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/middleware"
	adminResp "github.com/PtiCadri/studio/apps/api/internal/responses/admin"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) Me(w http.ResponseWriter, r *http.Request) {
	adminID, ok := middleware.GetAdminID(r)
	if !ok {
		http.Error(w, "unauthorized", http.StatusUnauthorized)
		return
	}

	admin, err := h.repo.GetByID(r.Context(), adminID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "admin not found", http.StatusUnauthorized)
			return
		}

		http.Error(w, "failed to fetch admin", http.StatusInternalServerError)
		return
	}

	utils.WriteJSON(w, http.StatusOK, adminResp.ToMeResponse(admin))
}
