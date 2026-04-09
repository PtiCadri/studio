package admin

import (
	"errors"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func DecodeLoginRequest(r *http.Request) (Login, error) {
	var request Login

	if err := utils.DecodeJSON(r, &request); err != nil {
		return Login{}, errors.New("invalid request body")
	}

	return request, nil
}
