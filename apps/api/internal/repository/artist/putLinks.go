package artist

import (
	"context"

	"github.com/PtiCadri/studio/apps/api/internal/domain/models"
)

func (r ArtistRepository) PutLinks(
	ctx context.Context,
	artistID int64,
	spotifyURL *string,
	deezerURL *string,
	appleMusicURL *string,
	soundcloudURL *string,
	youtubeURL *string,
	instagramURL *string,
	tiktokURL *string,
) (models.ArtistLinks, error) {
	const query = `
		INSERT INTO artist_links (
			artist_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url,
			instagram_url,
			tiktok_url
		)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		ON CONFLICT (artist_id)
		DO UPDATE SET
			spotify_url = EXCLUDED.spotify_url,
			deezer_url = EXCLUDED.deezer_url,
			apple_music_url = EXCLUDED.apple_music_url,
			soundcloud_url = EXCLUDED.soundcloud_url,
			youtube_url = EXCLUDED.youtube_url,
			instagram_url = EXCLUDED.instagram_url,
			tiktok_url = EXCLUDED.tiktok_url
		RETURNING
			artist_id,
			spotify_url,
			deezer_url,
			apple_music_url,
			soundcloud_url,
			youtube_url,
			instagram_url,
			tiktok_url;
	`

	var links models.ArtistLinks

	err := r.db.QueryRowContext(
		ctx,
		query,
		artistID,
		spotifyURL,
		deezerURL,
		appleMusicURL,
		soundcloudURL,
		youtubeURL,
		instagramURL,
		tiktokURL,
	).Scan(
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
