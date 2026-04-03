package adminHandler

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/PtiCadri/studio/apps/api/internal/auth"
	adminRequests "github.com/PtiCadri/studio/apps/api/internal/requests/admins"
)

func (h Admins) Login(w http.ResponseWriter, r *http.Request) {
	var request adminRequests.Login

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	if request.Email == "" || request.Password == "" {
		http.Error(w, "email and password are required", http.StatusBadRequest)
		return
	}

	admin, err := h.adminRepo.GetByEmail(r.Context(), request.Email)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(
				w,
				"invalid credentials",
				http.StatusUnauthorized,
			)
			return
		}

		http.Error(
			w,
			"failed to fetch admin user",
			http.StatusInternalServerError,
		)
		return
	}

	err = bcrypt.CompareHashAndPassword(
		[]byte(admin.PasswordHash),
		[]byte(request.Password),
	)
	if err != nil {
		http.Error(
			w,
			"invalid credentials",
			http.StatusUnauthorized,
		)
		return
	}

	cookieValue := auth.SignUserID(admin.ID, h.authSecret)

	http.SetCookie(w, &http.Cookie{
		Name:     "admin_session",
		Value:    cookieValue,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Secure:   false, // true in production with HTTPS
		Expires:  time.Now().Add(24 * time.Hour),
	})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	_ = json.NewEncoder(w).Encode(map[string]any{
		"message": "login successful",
	})
}
