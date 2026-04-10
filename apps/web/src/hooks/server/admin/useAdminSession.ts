"use client";

import { useEffect, useState } from "react";

import { getAdminSession } from "./api";
import type { AdminSession } from "./types";

type UseAdminSessionResult = {
    admin: AdminSession | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
};

export function useAdminSession(): UseAdminSessionResult {
    const [admin, setAdmin] = useState<AdminSession | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        async function loadSession(): Promise<void> {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getAdminSession();

                if (!isCancelled) {
                    setAdmin(data);
                }
            } catch (err) {
                if (!isCancelled) {
                    setAdmin(null);
                    setError(
                        err instanceof Error ? err.message : "Unauthorized"
                    );
                }
            } finally {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            }
        }

        void loadSession();

        return () => {
            isCancelled = true;
        };
    }, []);

    return {
        admin,
        isAuthenticated: admin !== null,
        isLoading,
        error,
    };
}
