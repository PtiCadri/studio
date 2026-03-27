import Form from "@/components/contact/Form";
import Infos from "@/components/contact/Infos";
import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Nhadès Records pour toute information ou demande de collaboration.",
};

export default function Contact() {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box component="img" src="/logo2.svg" alt="Logo du studio" sx={logoSx} />
      <Infos />
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", mb: "70px", ml: "260px" }}
      >
        Contactez le Studio
      </Typography>
      <Form />
    </GlassySurface>
  );
}

const surfaceSx = {
  width: "100%",
  maxWidth: "1150px",
  height: "auto",
  mt: "50px",
  pt: "110px",
  pb: "30px",
  mb: "30px",
};

const logoSx = {
  position: "absolute",
  top: "55px",
  left: "55px",
  width: "auto",
  height: "160px",
  userSelect: "none",
};
