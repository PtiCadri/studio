"use client";

import Link from "next/link";
import { Box, Button } from "@mui/material";
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
      <Button
        variant="outlined"
        component={Link}
        href="/contact"
        aria-label="Contactez le studio"
        sx={btnSx}
      >
        Contactez le studio
      </Button>
    </>
  );
}

const btnSx = {
  fontSize: "24px",
  borderColor: "text.primary",
};
