CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(150) NOT NULL CHECK (char_length(name) >= 3),
    description TEXT,
    location TEXT,
    event_date DATE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
);

CREATE EXTENSION IF NOT EXISTS "pgcrypto";