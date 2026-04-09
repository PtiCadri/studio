"use client";

import { useEffect, useState } from "react";

import { getProjects } from "./api";
import type { Project } from "./types";

type UseProjectsResult = {
    projects: Project[];
    isLoading: boolean;
    error: string | null;
};

export function useProjects(): UseProjectsResult {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadProjects(): Promise<void> {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getProjects();

                if (!isCancelled) {
                    setProjects(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch projects"
                    );
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadProjects();

        return () => {
            isCancelled = true;
        };
    }, []);

    return {
        projects,
        isLoading,
        error,
    };
}
