"use client";

import { NavbarButton, StudioName } from "@/components/navbar";
import { navbarLinks } from "@/components/navbar/navbar.constants";
import { navSx, stackSx } from "@/components/navbar/navbar.styles";
import { Box, Stack } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={navSx}>
      <StudioName />

      <Stack direction="row" sx={stackSx}>
        {navbarLinks.map((link) => (
          <NavbarButton key={link.key} link={link} />
        ))}
      </Stack>

      <Box
        component="img"
        src="/logo.svg"
        alt="Logo du studio"
        sx={{ height: "70px", mr: "15px", zIndex: 1 }}
      />
    </Box>
  );
}
