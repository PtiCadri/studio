import Link from "next/link";

import { Menu, MenuItem } from "@mui/material";

import { homePage, navbarLinks } from "../constants";
import { menuAnchorOrigin, menuSlotProps, menuTransformOrigin } from "./styles";

type NavMenuProps = {
  anchorEl: null | HTMLElement;
  isOpen: boolean;
  pathname: string;
  handleClose: () => void;
};

export default function NavLinks({
  anchorEl,
  isOpen,
  pathname,
  handleClose,
}: NavMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={menuAnchorOrigin}
      transformOrigin={menuTransformOrigin}
      slotProps={menuSlotProps}
    >
      {navbarLinks.concat([homePage]).map((link) => (
        <MenuItem
          key={link.key}
          component={Link}
          href={link.href}
          selected={pathname === link.href}
          onClick={handleClose}
          aria-label={link.ariaLabel}
        >
          {link.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
