package artistHandler

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"

	artistResponse "github.com/PtiCadri/studio/apps/api/internal/responses/artists"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Artists) GetLinks(w http.ResponseWriter, r *http.Request) {
	artistIDStr := chi.URLParam(r, "id")
	artistID, err := strconv.ParseInt(artistIDStr, 10, 64)
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	links, err := h.artistRepo.GetLinks(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist links not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist links", http.StatusInternalServerError)
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
		http.Error(w, "failed to encode artist links", http.StatusInternalServerError)
	}
}
