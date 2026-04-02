package artistRepo

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ArtistRepository) PutIntegrations(
	ctx context.Context,
	artistID int64,
	spotifyEmbedURL *string,
	deezerEmbedURL *string,
	appleMusicEmbedURL *string,
	soundcloudEmbedURL *string,
) (models.ArtistIntegrations, error) {
	const query = `
		INSERT INTO artist_integrations (
			artist_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url,
			soundcloud_embed_url
		)
		VALUES ($1, $2, $3, $4, $5)
		ON CONFLICT (artist_id)
		DO UPDATE SET
			spotify_embed_url = EXCLUDED.spotify_embed_url,
			deezer_embed_url = EXCLUDED.deezer_embed_url,
			apple_music_embed_url = EXCLUDED.apple_music_embed_url,
			soundcloud_embed_url = EXCLUDED.soundcloud_embed_url
		RETURNING
			artist_id,
			spotify_embed_url,
			deezer_embed_url,
			apple_music_embed_url,
			soundcloud_embed_url;
	`

	var integrations models.ArtistIntegrations

	err := r.db.QueryRowContext(
		ctx,
		query,
		artistID,
		spotifyEmbedURL,
		deezerEmbedURL,
		appleMusicEmbedURL,
		soundcloudEmbedURL,
	).Scan(
		&integrations.ArtistID,
		&integrations.SpotifyEmbedURL,
		&integrations.DeezerEmbedURL,
		&integrations.AppleMusicEmbedURL,
		&integrations.SoundcloudEmbedURL,
	)
	if err != nil {
		return models.ArtistIntegrations{}, err
	}

	return integrations, nil
}
