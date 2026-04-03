package middleware

import (
	"context"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/auth"
)

type contextKey string

const adminIDKey contextKey = "admin_id"

func AdminAuth(secret string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			cookie, err := r.Cookie("admin_session")
			if err != nil {
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}

			adminID, err := auth.VerifyUserID(cookie.Value, secret)
			if err != nil {
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}

			ctx := context.WithValue(r.Context(), adminIDKey, adminID)

			next.ServeHTTP(w, r.WithContext(ctx))
		})
	}
}
