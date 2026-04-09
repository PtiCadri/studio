package utils

import (
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

func ParseIDParam(r *http.Request, key string) (int64, error) {
	idStr := chi.URLParam(r, key)
	return strconv.ParseInt(idStr, 10, 64)
}
