package projectRequests

type PatchProject struct {
	Name     *string `json:"name"`
	ImageURL *string `json:"image_url"`
}
