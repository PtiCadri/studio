"use client";

import { useEffect, useState } from "react";

import { getArtistLinks } from "./api";
import type { ArtistLinks } from "./types";

type UseArtistLinksResult = {
    links: ArtistLinks | null;
    isLoading: boolean;
    error: string | null;
};

export function useArtistLinks(artistId: number | null): UseArtistLinksResult {
    const [links, setLinks] = useState<ArtistLinks | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadLinks(): Promise<void> {
            if (artistId === null) {
                setLinks(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getArtistLinks(artistId);

                if (!isCancelled) {
                    setLinks(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch artist integrations"
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
    }, [artistId]);

    return { links, isLoading, error };
}
