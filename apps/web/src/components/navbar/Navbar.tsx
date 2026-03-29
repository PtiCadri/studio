"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { NavbarDesktop, NavbarMobile } from "./";

export default function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return isDesktop ? <NavbarDesktop /> : <NavbarMobile />;
}
