package artist

import (
	"database/sql"
	"net/http"

	artistReq "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PatchLinks(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistReq.PatchLinks

	if err := utils.DecodeJSON(r, &request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentLinks, err := h.artistRepo.GetLinks(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist links not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist links", http.StatusInternalServerError)
		return
	}

	spotifyURL := utils.NullStringToPointer(currentLinks.SpotifyURL)
	if request.SpotifyURL != nil {
		spotifyURL = request.SpotifyURL
	}

	deezerURL := utils.NullStringToPointer(currentLinks.DeezerURL)
	if request.DeezerURL != nil {
		deezerURL = request.DeezerURL
	}

	appleMusicURL := utils.NullStringToPointer(currentLinks.AppleMusicURL)
	if request.AppleMusicURL != nil {
		appleMusicURL = request.AppleMusicURL
	}

	soundcloudURL := utils.NullStringToPointer(currentLinks.SoundcloudURL)
	if request.SoundcloudURL != nil {
		soundcloudURL = request.SoundcloudURL
	}

	youtubeURL := utils.NullStringToPointer(currentLinks.YoutubeURL)
	if request.YoutubeURL != nil {
		youtubeURL = request.YoutubeURL
	}

	instagramURL := utils.NullStringToPointer(currentLinks.InstagramURL)
	if request.InstagramURL != nil {
		instagramURL = request.InstagramURL
	}

	tiktokURL := utils.NullStringToPointer(currentLinks.TiktokURL)
	if request.TiktokURL != nil {
		tiktokURL = request.TiktokURL
	}

	links, err := h.artistRepo.PutLinks(
		r.Context(),
		artistID,
		spotifyURL,
		deezerURL,
		appleMusicURL,
		soundcloudURL,
		youtubeURL,
		instagramURL,
		tiktokURL,
	)
	if err != nil {
		http.Error(w, "failed to patch artist links", http.StatusInternalServerError)
		return
	}

	response := artistResp.ToArtistLinksResponse(links)
	utils.WriteJSON(w, http.StatusOK, response)
}
