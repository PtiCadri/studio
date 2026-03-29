"use client";

import { useState } from "react";

import {
    Prestations,
    PrestationsDescriptions,
} from "@/components/home/prestations/constants";
import type { PrestationId } from "@/components/home/prestations/types";

export default function usePrestations() {
    const [activeCard, setActiveCard] = useState<PrestationId | null>(null);

    const handleCardClick = (id: PrestationId) => {
        setActiveCard((current) => (current === id ? null : id));
    };

    const activePrestation = Prestations.find(
        (prestation) => prestation.id === activeCard
    );

    const activeDescription = PrestationsDescriptions.find(
        (prestation) => prestation.id === activeCard
    );

    return {
        activeCard,
        activeDescription,
        activePrestation,
        handleCardClick,
    };
}
