package project

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r *ProjectRepository) GetLinks(
	ctx context.Context,
	projectID int64,
) (models.ProjectLinks, error) {
	const query = `
		SELECT
			project_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url
		FROM project_links
		WHERE project_id = $1;
	`

	var links models.ProjectLinks

	err := r.db.QueryRowContext(ctx, query, projectID).Scan(
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
