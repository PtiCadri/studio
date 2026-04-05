"use client";
import { useProjects } from "@/hooks/references/useProjects";
import { Box } from "@mui/material";
import Project from "./Project";

export default function Projects() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <div>Chargement des projets...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={containerSx}>
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          name={project.name}
          image_url={project.image_url}
        />
      ))}
    </Box>
  );
}

const containerSx = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, minmax(0, 1fr))",
    lg: "repeat(2, minmax(0, 1fr))",
  },
  gap: 3,
  alignItems: "start",
};
