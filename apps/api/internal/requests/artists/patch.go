package artistRequests

type PatchArtist struct {
	Name     *string `json:"name"`
	ImageURL *string `json:"image_url"`
}
