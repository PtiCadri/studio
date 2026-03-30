import { Box } from "@mui/material";
import Image from "next/image";
import type { StudioPicInfos } from "./constants";
import { slideInnerSx, slideSx } from "./styles";

type SlideProps = {
  slide: StudioPicInfos;
};

export default function Slide({ slide }: SlideProps) {
  return (
    <Box sx={slideSx}>
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
  );
}
