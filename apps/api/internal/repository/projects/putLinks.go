package projectRepo

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ProjectRepository) PutLinks(
	ctx context.Context,
	projectID int64,
	spotifyURL *string,
	deezerURL *string,
	appleMusicURL *string,
	soundcloudURL *string,
	youtubeURL *string,
) (models.ProjectLinks, error) {
	const query = `
		INSERT INTO project_links (
			project_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url
		)
		VALUES ($1, $2, $3, $4, $5, $6)
		ON CONFLICT (project_id)
		DO UPDATE SET
			spotify_url = EXCLUDED.spotify_url,
			deezer_url = EXCLUDED.deezer_url,
			apple_music_url = EXCLUDED.apple_music_url,
			soundcloud_url = EXCLUDED.soundcloud_url,
			youtube_url = EXCLUDED.youtube_url
		RETURNING
			project_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url;
	`

	var links models.ProjectLinks

	err := r.db.QueryRowContext(
		ctx,
		query,
		projectID,
		spotifyURL,
		deezerURL,
		appleMusicURL,
		soundcloudURL,
		youtubeURL,
	).Scan(
		&links.ProjectID,
		&links.SpotifyURL,
		&links.DeezerURL,
		&links.AppleMusicURL,
		&links.SoundcloudURL,
		&links.YoutubeURL,
	)
	if err != nil {
		return models.ProjectLinks{}, err
	}

	return links, nil
}
