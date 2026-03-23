"use client";

import Link from "next/link";
import { Box, ButtonBase } from "@mui/material";
import { NAVBAR_HEIGHT } from "@/constants/layout";
import { Height } from "@mui/icons-material";

export default function NhaDesRecords({ isActive = false }: { isActive?: boolean }) {
    return (
        <ButtonBase
            component={Link}
            href="/"
            aria-label="Vers la page d'Accueil de Nhadès Records"
            disableTouchRipple
            sx={btnSx}
        >
            <Box sx={boxSx}>
                <Box sx={wrapperSx(isActive, "right")}>
                    <Box
                        component="img"
                        src="/nha.svg"
                        alt="Nom du studio"
                        sx={nhaSx}
                    />
                </Box>
                <Box sx={{...wrapperSx(isActive, "left"), ml: "15px"}}>
                    <Box
                        component="img"
                        src="/des.svg"
                        alt="Nom du studio"
                        sx={desSx}
                    />
                </Box>
            </Box>
            <Box sx={wrapperSx(isActive, "center")}>
                <Box
                    component="img"
                    src="/records.svg"
                    alt="Nom du studio"
                    sx={recordsSx}
                />
            </Box>
        </ButtonBase>
    );
}

const btnSx = {
    height: NAVBAR_HEIGHT,
    maxWidth: "175px",
    width: "175px",
    pl: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const boxSx = {
    width: "175px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
};

const nhaSx = {
    display: "block",
    height: "12px",
    width: "auto",
    mb: "5px",
};

const desSx = {
    display: "block",
    height: "15px",
    width: "auto",
    mb: "5px",
};

const recordsSx = {
    display: "block",
    width: "105px",
    height: "auto",
    mb: "5px",
    mt: "10px",
};

const wrapperSx = (isActive: boolean, transformOrigin: string) => ({
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -2,
    height: "1px",
    backgroundColor: "text.secondary",
    transform: isActive ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: transformOrigin,
    transition: "transform 250ms cubic-bezier(.4,0,.2,1)",
  },

  ".MuiButtonBase-root:hover &::after, .MuiButtonBase-root:focus-visible &::after":
    {
      transform: "scaleX(1)",
    },
});
