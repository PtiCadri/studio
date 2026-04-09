"use client";

import { useEffect, useState } from "react";

import { getArtistIntegrations } from "./api";
import type { ArtistIntegrations } from "./types";

type UseArtistIntegrationResult = {
    integrations: ArtistIntegrations | null;
    isLoading: boolean;
    error: string | null;
};

export function useArtistIntegrations(
    artistId: number | null
): UseArtistIntegrationResult {
    const [integrations, setIntegrations] = useState<ArtistIntegrations | null>(
        null
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadIntegrations(): Promise<void> {
            if (artistId === null) {
                setIntegrations(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getArtistIntegrations(artistId);

                if (!isCancelled) {
                    setIntegrations(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch artist integrations"
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
    }, [artistId]);

    return { integrations, isLoading, error };
}
