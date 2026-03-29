"use client";

import { GlassySurface } from "@/components/ui";
import { Box } from "@mui/material";
import Legals from "./Legals";
import Links from "./Links";
import SocialLinks from "./socialLinks/SocialLinks";
import { bottomInfosSx, containerSx, surfaceSx } from "./styles";

export default function Footer() {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box sx={containerSx}>
        <SocialLinks />
        <Box sx={bottomInfosSx}>
          <Legals />
          <Links />
        </Box>
      </Box>
    </GlassySurface>
  );
}
