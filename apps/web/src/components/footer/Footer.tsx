"use client";

import Legals from "@/components/footer/Legals";
import Links from "@/components/footer/Links";
import SocialLinks from "@/components/footer/socialLinks/SocialLinks";
import GlassySurface from "@/components/ui/GlassySurface";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box sx={containerSx}>
        <SocialLinks />
        <Legals />
        <Links />
      </Box>
    </GlassySurface>
  );
}

const surfaceSx = {
  width: "100%",
  height: "400px",
  mt: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0px",
};

const containerSx = {
  height: "100%",
  width: "100%",
  maxWidth: "1150px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  color: "text.secondary",
};
