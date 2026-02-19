CREATE TABLE IF NOT EXISTS artists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(150) NOT NULL CHECK (char_length(name) >= 3),
    image_url TEXT,
    extract_url TEXT,
    media_url TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);
