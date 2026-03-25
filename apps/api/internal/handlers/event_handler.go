package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
	"github.com/google/uuid"
)

// EventHandler handles HTTP requests related to events.
type EventHandler struct {
	eventRepo *postgres.EventRepository
}

// NewEventHandler creates a new EventHandler with the given repository.
func NewEventHandler(eventRepo *postgres.EventRepository) *EventHandler {
	return &EventHandler{eventRepo: eventRepo}
}

// CreateEvent handles the creation of a new event (admin side).
func (h *EventHandler) CreateEvent(w http.ResponseWriter, r *http.Request) {
	var event domain.Event
	if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	if err := h.eventRepo.CreateEvent(r.Context(), &event); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(event)
}

// GetUpcomingEvents handles the retrieval of upcoming events (public side).
func (h *EventHandler) GetUpcomingEvents(w http.ResponseWriter, r *http.Request) {
	events, err := h.eventRepo.GetUpcomingEvents(r.Context())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(events)
}

// UpdateEvent handles the update of an existing event (admin side).
func (h *EventHandler) UpdateEvent(w http.ResponseWriter, r *http.Request) {
	idStr := strings.TrimPrefix(r.URL.Path, "/admin/events/")
	id, err := uuid.Parse(idStr)
	log.Printf("...Updating event with ID: %s\n", idStr)
	if err != nil {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}
	var input domain.UpdateEventInput
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	event := domain.Event{
		ID:          id,
		Name:        input.Name,
		Description: input.Description,
		Location:    input.Location,
		StartDate:   input.StartDate,
		EndDate:     input.EndDate,
	}
	if err := h.eventRepo.UpdateEvent(r.Context(), &event); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// DeleteEvent handles the deletion of an event by ID (admin side).
func (h *EventHandler) DeleteEvent(w http.ResponseWriter, r *http.Request) {
	idStr := strings.TrimPrefix(r.URL.Path, "/admin/events/")
	id, err := uuid.Parse(idStr)
	if err != nil {
		http.Error(w, "invalid id", http.StatusBadRequest)
		return
	}
	if err := h.eventRepo.DeleteEvent(r.Context(), id); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

// DeleteFinishedEvents handles the deletion of all finished events (admin side).
func (h *EventHandler) DeleteFinishedEvents(w http.ResponseWriter, r *http.Request) {
	if err := h.eventRepo.DeleteFinishedEvents(r.Context()); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
