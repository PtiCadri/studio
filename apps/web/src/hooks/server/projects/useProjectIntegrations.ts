"use client";

import { useEffect, useState } from "react";

import { getProjectIntegrations } from "./api";
import type { ProjectIntegrations } from "./types";

type UseProjectIntegrationsResult = {
    integrations: ProjectIntegrations | null;
    isLoading: boolean;
    error: string | null;
};

export function useProjectIntegrations(
    projectId: number | null
): UseProjectIntegrationsResult {
    const [integrations, setIntegrations] =
        useState<ProjectIntegrations | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadIntegrations(): Promise<void> {
            if (projectId === null) {
                setIntegrations(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getProjectIntegrations(projectId);

                if (!isCancelled) {
                    setIntegrations(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch project integrations"
                    );
                    setIntegrations(null);
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadIntegrations();

        return () => {
            isCancelled = true;
        };
    }, [projectId]);

    return {
        integrations,
        isLoading,
        error,
    };
}
