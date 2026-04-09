"use client";

import { useState } from "react";

import type { ActiveIntegration } from "@/components/references/types";

export function useIntegration() {
    const [activeIntegration, setActiveIntegration] =
        useState<ActiveIntegration>(null);

    function resetIntegration(): void {
        setActiveIntegration(null);
    }

    return {
        activeIntegration,
        setActiveIntegration,
        resetIntegration,
    };
}
