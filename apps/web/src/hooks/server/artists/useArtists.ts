"use client";

import { useEffect, useState } from "react";

import { getArtists } from "./api";
import type { Artist } from "./types";

type UseArtistsResult = {
    artists: Artist[];
    isLoading: boolean;
    error: string | null;
};

export function useArtists(): UseArtistsResult {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadArtists(): Promise<void> {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getArtists();
                if (!isCancelled) {
                    setArtists(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : String(err));
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadArtists();

        return () => {
            isCancelled = true;
        };
    }, []);

    return { artists, isLoading, error };
}
