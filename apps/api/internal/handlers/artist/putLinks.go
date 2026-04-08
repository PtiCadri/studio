package artist

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistRequests "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PutLinks(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistRequests.PutLinks

	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	links, err := h.artistRepo.PutLinks(
		r.Context(),
		artistID,
		request.SpotifyURL,
		request.DeezerURL,
		request.AppleMusicURL,
		request.SoundcloudURL,
		request.YoutubeURL,
		request.InstagramURL,
		request.TiktokURL,
	)
	if err != nil {
		http.Error(
			w,
			"failed to save artist links",
			http.StatusInternalServerError,
		)
		return
	}

	response := artistResponse.ArtistLinksResponse{
		ArtistID:      links.ArtistID,
		SpotifyURL:    utils.NullStringToPointer(links.SpotifyURL),
		DeezerURL:     utils.NullStringToPointer(links.DeezerURL),
		AppleMusicURL: utils.NullStringToPointer(links.AppleMusicURL),
		SoundcloudURL: utils.NullStringToPointer(links.SoundcloudURL),
		YoutubeURL:    utils.NullStringToPointer(links.YoutubeURL),
		InstagramURL:  utils.NullStringToPointer(links.InstagramURL),
		TiktokURL:     utils.NullStringToPointer(links.TiktokURL),
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(response); err != nil {
		http.Error(
			w,
			"failed to encode artist links",
			http.StatusInternalServerError,
		)
	}
}
