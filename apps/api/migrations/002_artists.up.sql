CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE artists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    image_url TEXT,
    extract_url TEXT,
    media_url TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);