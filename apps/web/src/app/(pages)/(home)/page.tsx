"use client";

import PresentationStudio from "@/components/home/PresentationStudio";
import { Prestations } from "@/components/home/prestations";
import { Carousel, MainLogo } from "@/components/ui";
import { Button } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <MainLogo marginBottom={5} />

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
