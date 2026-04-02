package artistRepo

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ArtistRepository) GetLinks(
	ctx context.Context,
	artistID int64,
) (models.ArtistLinks, error) {
	const query = `
		SELECT
			artist_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url,
			instagram_url,
			tiktok_url
		FROM artist_links
		WHERE artist_id = $1;
	`

	var links models.ArtistLinks

	err := r.db.QueryRowContext(ctx, query, artistID).Scan(
		&links.ArtistID,
		&links.SpotifyURL,
		&links.DeezerURL,
		&links.AppleMusicURL,
		&links.SoundcloudURL,
		&links.YoutubeURL,
		&links.InstagramURL,
		&links.TiktokURL,
	)
	if err != nil {
		return models.ArtistLinks{}, err
	}

	return links, nil
}
