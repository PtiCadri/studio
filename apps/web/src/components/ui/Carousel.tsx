"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import GlassySurface from "./GlassySurface";

const slidesObj = [
  {
    src: "studio.png",
    alt: "photo du Studio",
    width: 1900,
    height: 778,
  },
  {
    src: "studio2.jpg",
    alt: "photo du Studio",
    width: 780,
    height: 383,
  },
  {
    src: "studio3.png",
    alt: "photo du Studio",
    width: 1824,
    height: 594,
  },
  {
    src: "studio4.webp",
    alt: "photo du Studio",
    width: 1208,
    height: 642,
  },
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
    <GlassySurface sx={rootSx}>
      <Box sx={viewportWrapperSx}>
        <Box ref={emblaRef} sx={viewportSx}>
          <Box sx={containerSx}>
            {slidesObj.map((slide) => (
              <Box key={slide.src} sx={slideSx}>
                <Box sx={slideInnerSx}>
                  <Image
                    src={`/studio/${slide.src}`}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    style={{ width: "100%", height: "auto" }}
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
            const isActive = index === selectedIndex;

            return (
              <Box
                key={index}
                component="button"
                onClick={() => handleDotClick(index)}
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
    </GlassySurface>
  );
}

const rootSx = {
  width: "100%",
  mb: "40px",
  userSelect: "none",
};

const viewportWrapperSx = {
  width: "100%",
};

const viewportSx = {
  overflow: "hidden",
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.05)",
  borderRadius: "4px",
};

const containerSx = {
  display: "flex",
  alignItems: "center",
};

const slideSx = {
  flex: "0 0 100%",
  minWidth: 0,
};

const slideInnerSx = {
  height: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  backgroundColor: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
});
