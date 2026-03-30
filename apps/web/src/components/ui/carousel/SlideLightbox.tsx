"use client";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton } from "@mui/material";
import Image from "next/image";

import type { StudioSlide } from "./constants";
import {
  lightboxCloseButtonSx,
  lightboxContentSx,
  lightboxImageSx,
  lightboxImageWrapperSx,
  lightboxPaperSx,
} from "./styles";

type SlideLightboxProps = {
  slide: StudioSlide | null;
  onClose: () => void;
};

export default function SlideLightbox({ slide, onClose }: SlideLightboxProps) {
  return (
    <Dialog
      open={slide !== null}
      onClose={onClose}
      fullScreen
      slotProps={{
        paper: {
          sx: lightboxPaperSx,
        },
      }}
    >
      {slide && (
        <Box sx={lightboxContentSx}>
          <IconButton
            onClick={onClose}
            aria-label="Close fullscreen image"
            sx={lightboxCloseButtonSx}
          >
            <CloseIcon />
          </IconButton>

          <Box sx={lightboxImageWrapperSx}>
            <Image
              src={`/studio/${slide.src}`}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              style={lightboxImageSx}
              priority
            />
          </Box>
        </Box>
      )}
    </Dialog>
  );
}
