package admin

import (
	"net/http"
	"time"

	auth "github.com/PtiCadri/studio/apps/api/internal/auth"
)

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
