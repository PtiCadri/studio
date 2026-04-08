CREATE TABLE IF NOT EXISTS artist_integrations (
    artist_id BIGINT PRIMARY KEY REFERENCES artists(id) ON DELETE CASCADE,
    spotify_embed_url TEXT,
    deezer_embed_url TEXT,
    apple_music_embed_url TEXT
);
