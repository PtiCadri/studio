"use client";

import { useState } from "react";

import useCarousel from "@/hooks/carousel/useCarousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton } from "@mui/material";

import GlassySurface from "../GlassySurface";
import { studioSlides, type StudioSlide } from "./constants";
import Dot from "./Dot";
import Slide from "./Slide";
import SlideLightbox from "./SlideLightbox";
import {
  containerSx,
  controlsRowSx,
  dotsSx,
  rootSx,
  viewportSx,
  viewportWrapperSx,
} from "./styles";

export default function Carousel() {
  const {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    scrollTo,
  } = useCarousel();

  const [fullscreenSlide, setFullscreenSlide] = useState<StudioSlide | null>(
    null
  );

  const handleOpenLightbox = (slide: StudioSlide) => {
    setFullscreenSlide(slide);
  };

  const handleCloseLightbox = () => {
    setFullscreenSlide(null);
  };

  return (
    <>
      <GlassySurface sx={rootSx}>
        <Box sx={viewportWrapperSx}>
          <Box ref={emblaRef} sx={viewportSx}>
            <Box sx={containerSx}>
              {studioSlides.map((slide) => (
                <Slide
                  key={slide.src}
                  slide={slide}
                  onClick={() => handleOpenLightbox(slide)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={controlsRowSx}>
          <IconButton
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeftIcon />
          </IconButton>

          <Box sx={dotsSx}>
            {scrollSnaps.map((_, index) => (
              <Dot
                key={index}
                index={index}
                selectedIndex={selectedIndex}
                scrollTo={scrollTo}
              />
            ))}
          </Box>

          <IconButton
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </GlassySurface>

      <SlideLightbox slide={fullscreenSlide} onClose={handleCloseLightbox} />
    </>
  );
}
