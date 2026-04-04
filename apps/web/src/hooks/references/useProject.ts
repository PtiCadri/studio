"use client";

import { useEffect, useState } from "react";

import { getProjectById, getProjectIntegrations, getProjectLinks } from "./api";
import type { ProjectDetail, ProjectIntegrations, ProjectLinks } from "./types";

type UseProjectResult = {
    project: ProjectDetail | null;
    links: ProjectLinks | null;
    integrations: ProjectIntegrations | null;
    isLoading: boolean;
    error: string | null;
};

export function useProject(projectId: number | null): UseProjectResult {
    const [project, setProject] = useState<ProjectDetail | null>(null);
    const [links, setLinks] = useState<ProjectLinks | null>(null);
    const [integrations, setIntegrations] =
        useState<ProjectIntegrations | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadProject(): Promise<void> {
            if (projectId === null) {
                setProject(null);
                setLinks(null);
                setIntegrations(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const [projectData, linksData, integrationsData] =
                    await Promise.allSettled([
                        getProjectById(projectId),
                        getProjectLinks(projectId),
                        getProjectIntegrations(projectId),
                    ]);

                if (isCancelled) {
                    return;
                }

                if (projectData.status === "rejected") {
                    throw projectData.reason;
                }

                setProject(projectData.value);

                setLinks(
                    linksData.status === "fulfilled" ? linksData.value : null
                );

                setIntegrations(
                    integrationsData.status === "fulfilled"
                        ? integrationsData.value
                        : null
                );
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch project"
                    );
                    setProject(null);
                    setLinks(null);
                    setIntegrations(null);
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadProject();

        return () => {
            isCancelled = true;
        };
    }, [projectId]);

    return {
        project,
        links,
        integrations,
        isLoading,
        error,
    };
}
