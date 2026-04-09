package project

import (
	"database/sql"
	"net/http"

	projectReq "github.com/PtiCadri/studio/apps/api/internal/requests/project"
	projectResp "github.com/PtiCadri/studio/apps/api/internal/responses/project"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) PatchLinks(w http.ResponseWriter, r *http.Request) {
	projectID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid project id", http.StatusBadRequest)
		return
	}

	var request projectReq.PatchLinks

	if err := utils.DecodeJSON(r, &request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentLinks, err := h.projectRepo.GetLinks(r.Context(), projectID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "project links not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch project links", http.StatusInternalServerError)
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

	links, err := h.projectRepo.PutLinks(
		r.Context(),
		projectID,
		spotifyURL,
		deezerURL,
		appleMusicURL,
		soundcloudURL,
		youtubeURL,
	)
	if err != nil {
		http.Error(w, "failed to patch project links", http.StatusInternalServerError)
		return
	}

	response := projectResp.ToProjectLinksResponse(links)

	utils.WriteJSON(w, http.StatusOK, response)
}
