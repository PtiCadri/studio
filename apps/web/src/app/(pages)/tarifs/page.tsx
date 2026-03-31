import Formules from "@/components/tarifs/Formules";
import Prestations from "@/components/tarifs/Prestations";
import { MainLogo } from "@/components/ui";
import { Box, Link, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Découvrez les tarifs pratiqués par Nhadès Records.",
};

export default function Tarifs() {
  return (
    <>
      <MainLogo />
      <Prestations />
      <Box sx={dividerSx} />
      <Formules />
      <Typography
        variant="h6"
        sx={{ mt: "20px", color: "text.secondary" }}
        gutterBottom
      >
        Pour toute autre prestation ou demande particulière, faites-le savoir
        dans votre
        <Box component={Link} href="/contact" sx={contactLinkSx}>
          message de contact
        </Box>
      </Typography>
    </>
  );
}

const contactLinkSx = {
  textDecoration: "underline",
  color: "text.secondary",
  pl: "5px",
  "&:hover": {
    color: "text.primary",
  },
};

const dividerSx = {
  width: "1080px",
  height: "1px",
  backgroundColor: "divider",
};
