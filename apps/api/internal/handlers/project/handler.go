package project

import repository_projects "github.com/PtiCadri/studio/apps/api/internal/repository/project"

type Handler struct {
	projectRepo *repository_projects.ProjectRepository
}

func New(projectRepo *repository_projects.ProjectRepository) Handler {
	return Handler{projectRepo: projectRepo}
}
