import { Box, ButtonBase } from "@mui/material";
import Image from "next/image";

import type { StudioSlide } from "./constants";
import { slideButtonSx, slideInnerSx, slideSx } from "./styles";

type SlideProps = {
  slide: StudioSlide;
  onClick: () => void;
};

export default function Slide({ slide, onClick }: SlideProps) {
  return (
    <Box sx={slideSx}>
      <ButtonBase
        onClick={onClick}
        aria-label={`Open image in fullscreen: ${slide.alt}`}
        sx={slideButtonSx}
      >
        <Box sx={slideInnerSx}>
          <Image
            src={`/studio/${slide.src}`}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </ButtonBase>
    </Box>
  );
}
