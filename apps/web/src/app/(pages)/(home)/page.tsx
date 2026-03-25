"use client";

import { Box } from "@mui/material";
import { Prestations } from "@/components/home/prestations";
import PresentationStudio from "@/components/home/PresentationStudio";
import Carousel from "@/components/ui/Carousel";


export default function HomePage() {

  return (
    <>
      <Box
        component="img"
        src="/logo2.svg"
        alt="Logo"
        sx={{ width: "auto", height: "400px", mb: "50px", userSelect: "none" }}
      />

      <Prestations />
      <Carousel />
      <PresentationStudio />
    </>
  );
}


