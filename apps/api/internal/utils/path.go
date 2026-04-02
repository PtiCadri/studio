package utils

import (
	"fmt"
	"strconv"
	"strings"
)

func GetIDFromPath(path string, prefix string) (int64, error) {
	idPart := strings.TrimPrefix(path, prefix)
	if idPart == "" || idPart == path {
		return 0, fmt.Errorf("missing id")
	}

	id, err := strconv.ParseInt(idPart, 10, 64)
	if err != nil {
		return 0, fmt.Errorf("invalid id: %w", err)
	}

	return id, nil
}
