import Formules from "@/components/tarifs/Formules";
import Prestations from "@/components/tarifs/Prestations";
import { Box, Link, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Découvrez les tarifs pratiqués par Nhadès Records.",
};

export default function Tarifs() {
  return (
    <Box sx={containerSx}>
      <Box
        component="img"
        src="/logo2.svg"
        alt="Logo"
        sx={{ width: "auto", height: "300px", userSelect: "none" }}
      />
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
        <Box
          component={Link}
          href="/contact"
          sx={{
            textDecoration: "underline",
            color: "text.secondary",
            pl: "5px",
            "&:hover": {
              color: "text.primary",
            },
          }}
        >
          message de contact
        </Box>
      </Typography>
    </Box>
  );
}

const containerSx = {
  width: "100%",
  maxWidth: "1150px",
  mb: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const dividerSx = {
  width: "1080px",
  height: "1px",
  backgroundColor: "divider",
};
