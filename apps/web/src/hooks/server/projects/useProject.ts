"use client";

import { useEffect, useState } from "react";

import { getProjectById } from "./api";
import type { ProjectDetail } from "./types";

type UseProjectResult = {
    project: ProjectDetail | null;
    isLoading: boolean;
    error: string | null;
};

export function useProject(projectId: number | null): UseProjectResult {
    const [project, setProject] = useState<ProjectDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadProject(): Promise<void> {
            if (projectId === null) {
                setProject(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getProjectById(projectId);

                if (!isCancelled) {
                    setProject(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch project"
                    );
                    setProject(null);
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
        isLoading,
        error,
    };
}
