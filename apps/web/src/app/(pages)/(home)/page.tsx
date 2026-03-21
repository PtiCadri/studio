"use client";

import StudioPic from "@/components/home/StudioPic";
import { Box } from "@mui/material";
import PresentationStudio from "@/components/home/PresentationStudio";
import Materiel from "@/components/home/materiel/Materiel";

export default function HomePage() {

  return (
    <Box sx={containerSx}>
      <StudioPic />
      <PresentationStudio />
      <Materiel />
    </Box>
  );
}

const containerSx = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
