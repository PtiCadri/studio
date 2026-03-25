--Create event 'admin side'
INSERT INTO events (name, description, location, start_date, end_date)
VALUES ($1, $2, $3, $4, $5);
--TURNING id, created_at;

--Get all upcoming events 'public side'
SELECT id, name, description, location, start_date, end_date
FROM events
WHERE start_date >= CURRENT_DATE
ORDER BY start_date ASC;

--Get all events 'admin side'
SELECT id, name, description, location, start_date, end_date, created_at
FROM events
ORDER BY created_at DESC;

--Get event by id 'admin side'
SELECT id, name, description, location, start_date, end_date, created_at
FROM events
WHERE id = $1;

--Update event 'admin side'
UPDATE events
SET name = $1, description = $2, location = $3, start_date = $4, end_date = $5
WHERE id = $6;

--Delete event 'admin side'
DELETE FROM events
WHERE id = $1;
