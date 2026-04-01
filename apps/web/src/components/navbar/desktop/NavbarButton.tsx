"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavbarButtonProps } from "../types";

import { underlinedWrapperSx } from "../styles";
import { btnSx } from "./styles";

export default function NavbarButton({ link }: NavbarButtonProps) {
  const pathname = usePathname();
  const isActive =
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

  return (
    <Button
      component={Link}
      href={link.href}
      aria-label={link.ariaLabel}
      variant="text"
      disableRipple
      disableElevation
      sx={btnSx(isActive)}
    >
      <Box component="span" sx={underlinedWrapperSx("center", isActive)}>
        {link.label}
      </Box>
    </Button>
  );
}
