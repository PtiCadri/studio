package projectHandler

import repository_projects "github.com/PtiCadri/studio/apps/api/internal/repository/projects"

type Projects struct {
	projectRepo *repository_projects.ProjectRepository
}

func New(projectRepo *repository_projects.ProjectRepository) Projects {
	return Projects{projectRepo: projectRepo}
}
