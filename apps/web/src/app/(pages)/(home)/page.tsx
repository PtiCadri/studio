"use client";

import PresentationStudio from "@/components/home/PresentationStudio";
import { Prestations } from "@/components/home/prestations";
import Carousel from "@/components/ui/Carousel";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Box
        component="img"
        src="/logo2.svg"
        alt="Logo"
        sx={{ width: "auto", height: "300px", mb: "50px", userSelect: "none" }}
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
