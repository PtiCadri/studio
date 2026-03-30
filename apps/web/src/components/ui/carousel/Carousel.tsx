"use client";

import useCarousel from "@/hooks/carousel/useCarousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton } from "@mui/material";
import GlassySurface from "../GlassySurface";
import { studioPicsInfos, type StudioPicInfos } from "./constants";
import Dot from "./Dot";
import Slide from "./Slide";
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

  return (
    <GlassySurface sx={rootSx}>
      <Box sx={viewportWrapperSx}>
        <Box ref={emblaRef} sx={viewportSx}>
          <Box sx={containerSx}>
            {studioPicsInfos.map((slide: StudioPicInfos) => (
              <Slide key={slide.src} slide={slide} />
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
  );
}
