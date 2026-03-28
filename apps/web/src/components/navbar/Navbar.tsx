"use client";

import { Box, Stack } from "@mui/material";

import { navbarLinks } from "./constants";
import { NavbarButton } from "./navbarButton";
import { StudioName } from "./studioName";
import { logoSx, navSx, stackSx } from "./styles";

export default function Navbar() {
  return (
    <Box sx={navSx}>
      <StudioName />

      <Stack direction="row" sx={stackSx}>
        {navbarLinks.map((link) => (
          <NavbarButton key={link.key} link={link} />
        ))}
      </Stack>

      <Box component="img" src="/logo.svg" alt="Logo du studio" sx={logoSx} />
    </Box>
  );
}
