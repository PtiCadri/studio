"use client";

import type { LightboxImage } from "@/components/ui/imageLightbox/types";
import { useState } from "react";

export default function useImageLightbox() {
    const [image, setImage] = useState<LightboxImage | null>(null);

    const openImage = (nextImage: LightboxImage) => {
        setImage(nextImage);
    };

    const closeImage = () => {
        setImage(null);
    };

    return {
        image,
        isOpen: image !== null,
        openImage,
        closeImage,
        lightboxProps: {
            image,
            open: image !== null,
            onClose: closeImage,
        },
    };
}
