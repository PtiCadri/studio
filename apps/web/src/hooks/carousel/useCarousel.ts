"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type CarouselState = {
    selectedIndex: number;
    scrollSnaps: number[];
    canScrollPrev: boolean;
    canScrollNext: boolean;
};

function getCarouselState(emblaApi: EmblaCarouselType): CarouselState {
    return {
        selectedIndex: emblaApi.selectedScrollSnap(),
        scrollSnaps: emblaApi.scrollSnapList(),
        canScrollPrev: emblaApi.canScrollPrev(),
        canScrollNext: emblaApi.canScrollNext(),
    };
}

function useCarouselStateSync(
    emblaApi: EmblaCarouselType | undefined,
    setCarouselState: React.Dispatch<React.SetStateAction<CarouselState>>
) {
    const syncState = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setCarouselState(getCarouselState(emblaApi));
    }, [emblaApi, setCarouselState]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        syncState();

        emblaApi.on("select", syncState);
        emblaApi.on("reInit", syncState);

        return () => {
            emblaApi.off("select", syncState);
            emblaApi.off("reInit", syncState);
        };
    }, [emblaApi, syncState]);
}

function useCarouselActions(emblaApi: EmblaCarouselType | undefined) {
    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            emblaApi?.scrollTo(index);
        },
        [emblaApi]
    );

    return {
        scrollPrev,
        scrollNext,
        scrollTo,
    };
}

export default function useCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    const [carouselState, setCarouselState] = useState<CarouselState>({
        selectedIndex: 0,
        scrollSnaps: [],
        canScrollPrev: false,
        canScrollNext: false,
    });

    useCarouselStateSync(emblaApi, setCarouselState);

    const { scrollPrev, scrollNext, scrollTo } = useCarouselActions(emblaApi);

    return {
        emblaRef,
        ...carouselState,
        scrollPrev,
        scrollNext,
        scrollTo,
    };
}
