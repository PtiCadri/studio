"use client";

import { Typography } from "@mui/material";

import { GlassySurface } from "@/components/ui";
import { useProject } from "@/hooks/references/useProject";
import { getImageUrl } from "@/utils/getImageUrl";

import { useProjectActions } from "@/hooks/references/useProjectActions";
import { useProjectIntegration } from "@/hooks/references/useProjectIntegration";
import ProjectDefaultCard from "./DefaultCard";
import ProjectIntegrationCard from "./IntegrationCard";
import { surfaceSx } from "./styles";

type ProjectProps = {
  id: number;
  name: string;
  image_url: string | null;
};

export default function Project({ id, name, image_url }: ProjectProps) {
  const imageSrc = getImageUrl(image_url);
  const { links, integrations, isLoading, error } = useProject(id);

  const { activeIntegration, setActiveIntegration, resetIntegration } =
    useProjectIntegration();

  const actions = useProjectActions({
    links,
    integrations,
    setActiveIntegration,
  });

  function renderContent() {
    if (isLoading) {
      return <Typography>Chargement...</Typography>;
    }

    if (error) {
      return <Typography>{error}</Typography>;
    }

    if (activeIntegration !== null) {
      return (
        <ProjectIntegrationCard
          name={name}
          activeIntegration={activeIntegration}
          integrations={integrations}
          onBack={resetIntegration}
        />
      );
    }

    return (
      <ProjectDefaultCard name={name} imageSrc={imageSrc} actions={actions} />
    );
  }

  return <GlassySurface sx={surfaceSx}>{renderContent()}</GlassySurface>;
}
