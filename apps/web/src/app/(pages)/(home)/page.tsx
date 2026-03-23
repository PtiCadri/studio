"use client";

import { Box } from "@mui/material";
import { PrestationCard } from "@/components/home/prestations";

export default function HomePage() {

  return (
    <Box sx={containerSx}>
      <PrestationCard />
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
