CREATE TABLE IF NOT EXISTS project_integrations (
    project_id BIGINT PRIMARY KEY REFERENCES projects(id) ON DELETE CASCADE,
    spotify_embed_url TEXT,
    deezer_embed_url TEXT,
    apple_music_embed_url TEXT
);
