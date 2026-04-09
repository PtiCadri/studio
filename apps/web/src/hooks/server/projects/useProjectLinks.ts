"use client";

import { useEffect, useState } from "react";

import { getProjectLinks } from "./api";
import type { ProjectLinks } from "./types";

type UseProjectLinksResult = {
    links: ProjectLinks | null;
    isLoading: boolean;
    error: string | null;
};

export function useProjectLinks(
    projectId: number | null
): UseProjectLinksResult {
    const [links, setLinks] = useState<ProjectLinks | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadLinks(): Promise<void> {
            if (projectId === null) {
                setLinks(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getProjectLinks(projectId);

                if (!isCancelled) {
                    setLinks(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch project links"
                    );
                    setLinks(null);
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadLinks();

        return () => {
            isCancelled = true;
        };
    }, [projectId]);

    return {
        links,
        isLoading,
        error,
    };
}
