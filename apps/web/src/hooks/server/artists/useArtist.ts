"use client";

import { useEffect, useState } from "react";

import { getArtistById } from "./api";
import type { ArtistDetail } from "./types";

type UseArtistResult = {
    artist: ArtistDetail | null;
    isLoading: boolean;
    error: string | null;
};

export function useArtist(artistId: number | null): UseArtistResult {
    const [artist, setArtist] = useState<ArtistDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadArtist(): Promise<void> {
            if (artistId === null) {
                setArtist(null);
                setIsLoading(false);
                setError(null);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const data = await getArtistById(artistId);

                if (!isCancelled) {
                    setArtist(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Failed to fetch artist"
                    );
                    setArtist(null);
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadArtist();

        return () => {
            isCancelled = true;
        };
    }, [artistId]);

    return { artist, isLoading, error };
}
