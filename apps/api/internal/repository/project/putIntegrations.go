package project

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ProjectRepository) PutIntegrations(
	ctx context.Context,
	projectID int64,
	spotifyEmbedURL *string,
	deezerEmbedURL *string,
	appleMusicEmbedURL *string,
) (models.ProjectIntegrations, error) {
	const query = `
		INSERT INTO project_integrations (
			project_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url
		)
		VALUES ($1, $2, $3, $4)
		ON CONFLICT (project_id)
		DO UPDATE SET
			spotify_embed_url = EXCLUDED.spotify_embed_url,
			deezer_embed_url = EXCLUDED.deezer_embed_url,
			apple_music_embed_url = EXCLUDED.apple_music_embed_url
		RETURNING
			project_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url;
	`

	var integrations models.ProjectIntegrations

	err := r.db.QueryRowContext(
		ctx,
		query,
		projectID,
		spotifyEmbedURL,
		deezerEmbedURL,
		appleMusicEmbedURL,
	).Scan(
		&integrations.ProjectID,
		&integrations.SpotifyEmbedURL,
		&integrations.DeezerEmbedURL,
		&integrations.AppleMusicEmbedURL,
	)
	if err != nil {
		return models.ProjectIntegrations{}, err
	}

	return integrations, nil
}
