package projectRepo

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ProjectRepository) GetIntegrations(
	ctx context.Context,
	projectID int64,
) (models.ProjectIntegrations, error) {
	const query = `
		SELECT
			project_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url,
			soundcloud_embed_url
		FROM project_integrations
		WHERE project_id = $1;
	`

	var integrations models.ProjectIntegrations

	err := r.db.QueryRowContext(ctx, query, projectID).Scan(
		&integrations.ProjectID,
		&integrations.SpotifyEmbedURL,
		&integrations.DeezerEmbedURL,
		&integrations.AppleMusicEmbedURL,
		&integrations.SoundcloudEmbedURL,
	)
	if err != nil {
		return models.ProjectIntegrations{}, err
	}

	return integrations, nil
}
