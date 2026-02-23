--Create event 'admin side'
INSERT INTO events (name, description, location, event_date)
VALUES ($1, $2, $3, $4);
RETURNING id, created_at;

--Get all upcoming events 'public side'
SELECT id, name, description, location, event_date
FROM events
WHERE event_date >= CURRENT_DATE
ORDER BY event_date ASC;

--Get all events 'admin side'
SELECT id, name, description, location, event_date, created_at
FROM events
ORDER BY created_at DESC;

--Get event by id 'admin side'
SELECT id, name, description, location, event_date, created_at
FROM events
WHERE id = $1;

--Update event 'admin side'
UPDATE events
SET name = $1, description = $2, location = $3, event_date = $4
WHERE id = $5;

--Delete event 'admin side'
DELETE FROM events
WHERE id = $1;

