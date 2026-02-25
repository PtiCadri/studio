import Link from 'next/link';
import { Button } from '@mui/material';

interface NavbarButtonProps {
    label: string;
    href: string;
    ariaLabel: string;
}

export default function NavbarButton({
    label,
    href,
    ariaLabel
}: NavbarButtonProps) {

    return (
        <Button
            component={Link}
            href={href}
            aria-label={ariaLabel}
            variant="text"
            disableRipple
            disableElevation
            sx={btnSx}
        >
            {label}
        </Button>
    );
}

const btnSx = {
    fontSize: "18px",
    fontWeight: 400,

    position: "relative",
    px: 0,
    backgroundColor: "transparent",
    transition: "none",

    "&:hover": {
      backgroundColor: "transparent",
      transform: "scale(1.05)",
      transition: "transform 0.2s ease",
    },    

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 4,
      height: "1px",
      backgroundColor: "common.white",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 180ms cubic-bezier(.4,0,.2,1)",
    },

    "&:hover::after, &:focus-visible::after": {
      transform: "scaleX(1)",
    },
};
