"use client";

import { useProject } from "./useProject";
import { useProjectIntegrations } from "./useProjectIntegrations";
import { useProjectLinks } from "./useProjectLinks";

export function useProjectDetails(projectId: number | null) {
    const projectState = useProject(projectId);
    const linksState = useProjectLinks(projectId);
    const integrationsState = useProjectIntegrations(projectId);

    return {
        project: projectState.project,
        links: linksState.links,
        integrations: integrationsState.integrations,
        isLoading:
            projectState.isLoading ||
            linksState.isLoading ||
            integrationsState.isLoading,
        error:
            projectState.error || linksState.error || integrationsState.error,
    };
}
