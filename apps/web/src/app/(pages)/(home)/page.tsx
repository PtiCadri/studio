"use client";

import { Box } from "@mui/material";
import { Prestations } from "@/components/home/prestations";
import PresentationStudio from "@/components/home/PresentationStudio";


export default function HomePage() {

  return (
    <Box sx={containerSx}>
      <Box
        component="img"
        src="/logo2.svg"
        alt="Logo"
        sx={{ width: "auto", height: "400px", mb: "50px" }}
      />

      <Prestations />

      <PresentationStudio />
    </Box>
  );
}

const containerSx = {
  height: "auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
