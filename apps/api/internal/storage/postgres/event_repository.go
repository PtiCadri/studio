package postgres

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/PtiCadri/studio/apps/api/internal/domain"

	"github.com/google/uuid"
)

// EventRepository provides methods to interact with the events table in the database.
type EventRepository struct {
	db *sql.DB
}

// NewEventRepository creates a new EventRepository with the given database connection.
func NewEventRepository(db *sql.DB) *EventRepository {
	return &EventRepository{db: db}
}

// Create a new event in the database (admin side).
func (r *EventRepository) CreateEvent(ctx context.Context, event *domain.Event) error {
	query :=
		`INSERT INTO events (name, description, location, start_date, end_date)
	VALUES ($1, $2, $3, $4, $5) 
	RETURNING id, created_at
	`
	fmt.Printf("Creating event: %s\n", event.Name)
	return r.db.QueryRowContext(
		ctx,
		query,
		event.Name,
		event.Description,
		event.Location,
		event.StartDate,
		event.EndDate,
	).Scan(&event.ID, &event.CreatedAt)
}

// Get upcoming events from the database (public side).
func (r *EventRepository) GetUpcomingEvents(ctx context.Context) ([]domain.Event, error) {
	query :=
		`SELECT id, name, description, location, start_date, end_date, created_at
	FROM events
	WHERE start_date >= CURRENT_DATE
	ORDER BY start_date ASC
	`

	rows, err := r.db.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var events []domain.Event
	for rows.Next() {
		var event domain.Event
		if err := rows.Scan(
			&event.ID,
			&event.Name,
			&event.Description,
			&event.Location,
			&event.StartDate,
			&event.EndDate,
			&event.CreatedAt,
		); err != nil {
			return nil, err
		}
		events = append(events, event)
	}
	fmt.Printf("Retrieved %d upcoming events\n", len(events))
	return events, nil
}

// GetEventByID retrieves an event by its ID (admin side).
func (r *EventRepository) GetEventByID(ctx context.Context, id uuid.UUID) (*domain.Event, error) {
	query := `
	SELECT id, name, description, location, start_date, end_date, created_at
	FROM events
	WHERE id = $1
	`
	var event domain.Event
	err := r.db.QueryRowContext(ctx, query, id).Scan(
		&event.ID,
		&event.Name,
		&event.Description,
		&event.Location,
		&event.StartDate,
		&event.EndDate,
		&event.CreatedAt,
	)
	if err != nil {
		return nil, err
	}
	fmt.Printf("Retrieved event with ID: %s\n", id)
	return &event, nil
}

// UpdateEvent updates an existing event in the database (admin side).
func (r *EventRepository) UpdateEvent(ctx context.Context, event *domain.Event) error {
	query := `
	UPDATE events
	SET name = $1, description = $2, location = $3, start_date = $4, end_date = $5
	WHERE id = $6
	`
	_, err := r.db.ExecContext(
		ctx, query,
		event.Name,
		event.Description,
		event.Location,
		event.StartDate,
		event.EndDate,
		event.ID,
	)
	fmt.Printf("Updating event with ID: %s\n", event.ID)
	return err
}

// DeleteEvent deletes an event from the database by its ID (admin side).
func (r *EventRepository) DeleteEvent(ctx context.Context, id uuid.UUID) error {
	query := `
	DELETE FROM events 
	WHERE id = $1
	`
	fmt.Printf("Deleting event with ID: %s\n", id)
	return r.db.QueryRowContext(ctx, query, id).Err()
}
