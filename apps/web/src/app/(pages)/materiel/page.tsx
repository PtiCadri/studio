import CardStack from "@/components/matos/CardStack";
import { MainLogo } from "@/components/ui";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matériel",
  description: "Découvrez le matériel du studio Nhadès Records.",
};

export default function Materiel() {
  return (
    <Box sx={containerSx}>
      <Box sx={listSx}>
        <MainLogo />
        <CardStack />
      </Box>
    </Box>
  );
}

const containerSx = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 3,
  pb: 6,
};

const listSx = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
};
