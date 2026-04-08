package middleware

import "net/http"

// CORS returns a middleware that sets the Access-Control-Allow-Origin
// header to the specified allowedOrigin, and also sets the
// Access-Control-Allow-Methods, Access-Control-Allow-Headers, and
// Access-Control-Allow-Credentials headers to allow cross-origin
// requests. If allowedOrigin is an empty string, the
// Access-Control-Allow-Origin header is not set. The middleware
// returns an http.Handler that wraps the given next http.Handler.
//
// If the request method is OPTIONS, the middleware returns a
// 204 response without calling next.ServeHTTP. Otherwise, it
// calls next.ServeHTTP to continue handling the request.
func CORS(allowedOrigin string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			if allowedOrigin != "" {
				w.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
			}

			w.Header().Set("Vary", "Origin")
			w.Header().Set(
				"Access-Control-Allow-Methods",
				"GET, POST, PUT, PATCH, DELETE, OPTIONS",
			)
			w.Header().Set(
				"Access-Control-Allow-Headers",
				"Content-Type, Authorization",
			)
			w.Header().Set("Access-Control-Allow-Credentials", "true")

			if r.Method == http.MethodOptions {
				w.WriteHeader(http.StatusNoContent)
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}
