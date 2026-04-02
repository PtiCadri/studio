CREATE TABLE IF NOT EXISTS project_links (
    project_id BIGINT PRIMARY KEY REFERENCES projects(id) ON DELETE CASCADE,
    spotify_url TEXT,
    deezer_url TEXT,
    apple_music_url TEXT,
    soundcloud_url TEXT,
    youtube_url TEXT
);
