type Artist = {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
    updated_at: string;
};

type Project = {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
    updated_at: string;
};

type ProjectDetail = {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
    updated_at: string;
    artists: Artist[];
};

type ProjectLinks = {
    project_id: number;
    spotify_url: string | null;
    deezer_url: string | null;
    apple_music_url: string | null;
    soundcloud_url: string | null;
    youtube_url: string | null;
};

type ProjectIntegrations = {
    project_id: number;
    spotify_embed_url: string | null;
    deezer_embed_url: string | null;
    apple_music_embed_url: string | null;
    soundcloud_embed_url: string | null;
};

export type {
    Artist,
    Project,
    ProjectDetail,
    ProjectIntegrations,
    ProjectLinks,
};
