CREATE TABLE tracks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    duration INT, -- en secondes
    audio_url TEXT,
    track_number INT,
    created_at TIMESTAMP DEFAULT NOW()
);
