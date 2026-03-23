"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    Box,
    IconButton,
} from "@mui/material";
import Image from "next/image";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const slides = [
    "studio.png",
    "Slide 2",
    "Slide 3",
    "Slide 4",
];

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const handlePrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const handleNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const handleDotClick = useCallback(
        (index: number) => {
            emblaApi?.scrollTo(index);
        },
        [emblaApi]
    );

    return (
        <Box sx={rootSx}>
            <Box sx={viewportWrapperSx}>
                <Box ref={emblaRef} sx={viewportSx}>
                    <Box sx={containerSx}>
                        {slides.map((slide) => (
                            <Box key={slide} sx={slideSx}>
                                <Box sx={slideInnerSx}>
                                    <Image
                                        src={`/studio/${slide}`}
                                        alt={slide}
                                        width={1900}
                                        height={778}
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box sx={controlsRowSx}>
                <IconButton
                    onClick={handlePrev}
                    disabled={!canScrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon />
                </IconButton>

                <Box sx={dotsSx}>
                    {scrollSnaps.map((_, index) => {
                        const isActive =
                            index === selectedIndex;

                        return (
                            <Box
                                key={index}
                                component="button"
                                onClick={() =>
                                    handleDotClick(index)
                                }
                                aria-label={`Go to slide ${index + 1}`}
                                sx={dotSx(isActive)}
                            />
                        );
                    })}
                </Box>

                <IconButton
                    onClick={handleNext}
                    disabled={!canScrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

const rootSx = {
    width: "100%",
    maxWidth:  "1150px",
    mb: "40px",
};

const viewportWrapperSx = {
    width: "100%",
};

const viewportSx = {
    overflow: "hidden",
    width: "100%",
};

const containerSx = {
    display: "flex",
};

const slideSx = {
    flex: "0 0 100%",
    minWidth: 0,
};

const slideInnerSx = {
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "1px solid rgba(255,255,255,0.12)",
};

const controlsRowSx = {
    mt: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
};

const dotsSx = {
    display: "flex",
    alignItems: "center",
    gap: 1,
};

const dotSx = (isActive: boolean) => ({
    width: 10,
    height: 10,
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    padding: 0,
    backgroundColor: isActive
        ? "rgba(255,255,255,0.9)"
        : "rgba(255,255,255,0.3)",
});