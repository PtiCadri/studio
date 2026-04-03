CREATE TABLE artist_projects (
    artist_id UUID REFERENCES artists(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    PRIMARY KEY (artist_id, project_id)
    );
    