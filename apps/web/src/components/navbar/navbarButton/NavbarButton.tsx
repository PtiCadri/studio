"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavbarButtonProps } from "./types";

import { btnSx, labelSx } from "./styles";

export default function NavbarButton({ link }: NavbarButtonProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link.href);

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
      <Box component="span" sx={labelSx(isActive)}>
        {link.label}
      </Box>
    </Button>
  );
}
