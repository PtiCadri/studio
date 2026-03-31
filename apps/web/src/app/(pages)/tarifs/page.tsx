import Formules from "@/components/tarifs/Formules";
import Prestations from "@/components/tarifs/Prestations";
import { Divider, MainLogo } from "@/components/ui";
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
      <Divider />
      <Formules />
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          fontSize: { xs: ".8rem", md: "1rem" },
        }}
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
