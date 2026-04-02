CREATE TABLE IF NOT EXISTS artist_links (
    artist_id BIGINT PRIMARY KEY REFERENCES artists(id) ON DELETE CASCADE,
    spotify_url TEXT,
    deezer_url TEXT,
    apple_music_url TEXT,
    soundcloud_url TEXT,
    youtube_url TEXT,
    instagram_url TEXT,
    tiktok_url TEXT
);
