package artist

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ArtistRepository) GetIntegrations(
	ctx context.Context,
	artistID int64,
) (models.ArtistIntegrations, error) {
	const query = `
		SELECT
			artist_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url
		FROM artist_integrations
		WHERE artist_id = $1;
	`

	var integrations models.ArtistIntegrations

	err := r.db.QueryRowContext(ctx, query, artistID).Scan(
		&integrations.ArtistID,
		&integrations.SpotifyEmbedURL,
		&integrations.DeezerEmbedURL,
		&integrations.AppleMusicEmbedURL,
	)
	if err != nil {
		return models.ArtistIntegrations{}, err
	}

	return integrations, nil
}
