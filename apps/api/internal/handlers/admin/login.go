package admin

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"golang.org/x/crypto/bcrypt"

	auth "github.com/PtiCadri/studio/apps/api/internal/auth"
	adminModels "github.com/PtiCadri/studio/apps/api/internal/domain/models"
	adminRequests "github.com/PtiCadri/studio/apps/api/internal/requests/admin"
)

var (
	ErrInvalidCredentials = errors.New("invalid credentials")
	ErrFetchAdmin         = errors.New("failed to fetch admin user")
)

func (h Admin) Login(w http.ResponseWriter, r *http.Request) {
	request, err := decodeLoginRequest(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	admin, err := h.authenticateAdmin(r.Context(), request)
	if err != nil {
		h.handleLoginError(w, err)
		return
	}

	setAdminSessionCookie(w, admin.ID, h.authSecret)
	writeJSON(w, http.StatusOK, map[string]any{
		"message": "login successful",
	})
}

func decodeLoginRequest(r *http.Request) (adminRequests.Login, error) {
	var request adminRequests.Login

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return adminRequests.Login{}, errors.New("invalid request body")
	}

	if request.Email == "" || request.Password == "" {
		return adminRequests.Login{}, errors.New(
			"email and password are required",
		)
	}

	return request, nil
}

func (h Admin) authenticateAdmin(
	ctx context.Context,
	request adminRequests.Login,
) (adminModels.Admin, error) {
	admin, err := h.adminRepo.GetByEmail(ctx, request.Email)
	if err != nil {
		if err == sql.ErrNoRows {
			return adminModels.Admin{}, ErrInvalidCredentials
		}

		return adminModels.Admin{}, ErrFetchAdmin
	}

	err = bcrypt.CompareHashAndPassword(
		[]byte(admin.PasswordHash),
		[]byte(request.Password),
	)
	if err != nil {
		return adminModels.Admin{}, ErrInvalidCredentials
	}

	return admin, nil
}

func (h Admin) handleLoginError(w http.ResponseWriter, err error) {
	switch err {
	case ErrInvalidCredentials:
		http.Error(w, err.Error(), http.StatusUnauthorized)
	case ErrFetchAdmin:
		http.Error(w, err.Error(), http.StatusInternalServerError)
	default:
		http.Error(w, "internal server error", http.StatusInternalServerError)
	}
}

func setAdminSessionCookie(
	w http.ResponseWriter,
	adminID int64,
	authSecret string,
) {
	cookieValue := auth.SignUserID(adminID, authSecret)

	http.SetCookie(w, &http.Cookie{
		Name:     "admin_session",
		Value:    cookieValue,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
		Secure:   false,
		Expires:  time.Now().Add(24 * time.Hour),
	})
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
