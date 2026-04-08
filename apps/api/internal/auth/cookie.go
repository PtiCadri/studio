package auth

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"strconv"
	"strings"
)

// SignUserID generates a signed user ID cookie value.
// It takes an integer user ID and a secret string as input.
// The function returns a string in the format of "userID.signature"
// where signature is the base64 encoded HMAC-SHA256 value of the user ID
// and the secret string.
// The returned string is a valid cookie value.
func SignUserID(userID int64, secret string) string {
	payload := strconv.FormatInt(userID, 10)

	mac := hmac.New(sha256.New, []byte(secret))
	mac.Write([]byte(payload))
	signature := base64.URLEncoding.EncodeToString(mac.Sum(nil))

	return payload + "." + signature
}

// VerifyUserID verifies a signed user ID cookie value.
// It takes a signed user ID cookie value and a secret string as input.
// The function returns the user ID as an integer if the signature is valid,
// or an error if the signature is invalid or the user ID is invalid.
// The returned error is of type *fmt.Error.
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
