package utils

import (
	"encoding/json"
	"net/http"
)

func DecodeJSON(r *http.Request, dest any) error {
	return json.NewDecoder(r.Body).Decode(dest)
}
