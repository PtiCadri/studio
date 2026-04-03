package auth

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"strconv"
	"strings"
)

func SignUserID(userID int64, secret string) string {
	payload := strconv.FormatInt(userID, 10)

	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(payload))
	signature := base64.URLEncoding.EncodeToString(mac.Sum(nil))

	return payload + "." + signature
}

func VerifyUserID(value string, secret string) (int64, error) {
	parts := strings.Split(value, ".")
	if len(parts) != 2 {
		return 0, fmt.Errorf("invalid cookie format")
	}

	payload := parts[0]
	givenSignature := parts[1]

	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(payload))
	expectedSignature := base64.URLEncoding.EncodeToString(mac.Sum(nil))

	if !hmac.Equal(
		[]byte(givenSignature),
		[]byte(expectedSignature),
	) {
		return 0, fmt.Errorf("invalid signature")
	}

	userID, err := strconv.ParseInt(payload, 10, 64)
	if err != nil {
		return 0, fmt.Errorf("invalid user id: %w", err)
	}

	return userID, nil
}
