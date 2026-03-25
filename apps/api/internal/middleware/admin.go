package middleware

import (
	"net/http"

	"github.com/gorilla/mux"
)

// AdminMiddleware checks for a valid admin token in the Authorization header.
// func AdminMiddleware(adminToken string) func(http.Handler) http.Handler {
// 	return func(next http.Handler) http.Handler {
// 		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
// 			authHeader := r.Header.Get("Authorization")
// 			if authHeader == "" {
// 				http.Error(w, "missing authorization header", http.StatusUnauthorized)
// 				return
// 			}
// 			token := strings.TrimPrefix(authHeader, "Bearer ")
// 			if token != adminToken {
// 				http.Error(w, "invalid admin token", http.StatusUnauthorized)
// 				return
// 			}
// 			next.ServeHTTP(w, r)
// 		})
// 	}
// }

func AdminMiddleware(token string) mux.MiddlewareFunc {

	return func(next http.Handler) http.Handler {

		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

			authHeader := r.Header.Get("Authorization")

			expected := "Bearer " + token

			if authHeader != expected {

				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}

			next.ServeHTTP(w, r)

		})

	}
}
