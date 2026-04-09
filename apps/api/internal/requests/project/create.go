package project

type CreateProject struct {
	Name     string  `json:"name"`
	ImageURL *string `json:"image_url"`
}
