package utils

import "database/sql"

func NullStringToPointer(value sql.NullString) *string {
	if !value.Valid {
		return nil
	}

	return &value.String
}
