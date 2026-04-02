package requests

type CreateProjectRequest struct {
	Name     string  `json:"name"`
	ImageURL *string `json:"image_url"`
}
