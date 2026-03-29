"use client";

import { useState } from "react";

import {
    Prestations,
    PrestationsDescriptions,
    type PrestationId,
} from "@/constants/prestations/prestations";

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
