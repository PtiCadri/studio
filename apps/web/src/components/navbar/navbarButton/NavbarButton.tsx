import { Box, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavbarLink } from "@/components/navbar/navbarButton/navbarButton.types";

import {
  btnSx,
  labelSx,
} from "@/components/navbar/navbarButton/navbarButton.styles";

export default function NavbarButton({ link }: { link: NavbarLink }) {
  const pathname = usePathname();

  return (
    <Button
      component={Link}
      href={link.href}
      aria-label={link.ariaLabel}
      variant="text"
      disableRipple
      disableElevation
      sx={btnSx(pathname === link.href)}
    >
      <Box component="span" sx={labelSx(pathname === link.href)}>
        {link.label}
      </Box>
    </Button>
  );
}
