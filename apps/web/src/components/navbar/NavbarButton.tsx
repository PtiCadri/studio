import { type NavbarLink } from "@/components/navbar/navbar.constants";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function NavbarButton({
  key,
  label,
  href,
  ariaLabel,
  isActive = false,
}: NavbarLink) {
  return (
    <Button
      key={key}
      component={Link}
      href={href}
      aria-label={ariaLabel}
      variant="text"
      disableRipple
      disableElevation
      sx={btnSx(isActive)}
    >
      <Box component="span" sx={labelSx(isActive)}>
        {label}
      </Box>
    </Button>
  );
}

const btnSx = (isActive: boolean) => ({
  zIndex: 1,
  fontSize: "18px",
  fontWeight: 400,
  color: isActive ? "text.primary" : "text.secondary",

  position: "relative",
  px: 0,
  py: 0,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "transparent",
    color: "text.primary",
  },
});

const labelSx = (isActive: boolean) => ({
  position: "relative",
  display: "inline-block",

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -2,
    height: "1px",
    backgroundColor: "text.secondary",
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
    transition: "transform 250ms cubic-bezier(.4,0,.2,1)",
  },

  ".MuiButton-root:hover &::after, .MuiButton-root:focus-visible &::after": {
    transform: "scaleX(1)",
  },
});
