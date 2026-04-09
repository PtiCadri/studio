package artist

import (
	"database/sql"
	"net/http"

	artistReq "github.com/PtiCadri/studio/apps/api/internal/requests/artist"
	artistResp "github.com/PtiCadri/studio/apps/api/internal/responses/artist"
	"github.com/PtiCadri/studio/apps/api/internal/utils"
)

func (h Handler) Patch(w http.ResponseWriter, r *http.Request) {
	artistID, err := utils.ParseIDParam(r, "id")
	if err != nil {
		http.Error(w, "invalid artist id", http.StatusBadRequest)
		return
	}

	var request artistReq.PatchArtist

	if err := utils.DecodeJSON(r, &request); err != nil {
		http.Error(w, "invalid request body", http.StatusBadRequest)
		return
	}

	currentArtist, err := h.artistRepo.GetByID(r.Context(), artistID)
	if err != nil {
		if err == sql.ErrNoRows {
			http.Error(w, "artist not found", http.StatusNotFound)
			return
		}

		http.Error(w, "failed to fetch artist", http.StatusInternalServerError)
		return
	}

	name, imageURL := mergeArtistPatch(currentArtist, request)

	artist, err := h.artistRepo.Update(
		r.Context(),
		artistID,
		name,
		imageURL,
	)
	if err != nil {
		http.Error(w, "failed to update artist", http.StatusInternalServerError)
		return
	}

	response := artistResp.ToArtistResponse(artist)
	utils.WriteJSON(w, http.StatusOK, response)
}
