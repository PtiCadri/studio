package handlers

import (
	"encoding/json"
	"net/http"

	"github.com/PtiCadri/studio/apps/api/internal/domain"
	"github.com/PtiCadri/studio/apps/api/internal/storage/postgres"
)

type EventHandler struct {
	eventRepo *postgres.EventRepository
}

func NewEventHandler(eventRepo *postgres.EventRepository) *EventHandler {
	return &EventHandler{eventRepo: eventRepo}
}

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

func (h *EventHandler) GetUpcomingEvents(w http.ResponseWriter, r *http.Request) {
	events, err := h.eventRepo.GetUpcomingEvents(r.Context())
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(events)
}
