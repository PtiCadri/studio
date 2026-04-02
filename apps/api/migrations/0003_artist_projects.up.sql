CREATE TABLE IF NOT EXISTS artist_projects (
    artist_id BIGINT NOT NULL REFERENCES artists(id) ON DELETE CASCADE,
    project_id BIGINT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    PRIMARY KEY (artist_id, project_id)
);

CREATE INDEX IF NOT EXISTS idx_artist_projects_project_id
ON artist_projects(project_id);
