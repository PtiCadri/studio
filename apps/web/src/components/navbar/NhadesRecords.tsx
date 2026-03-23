"use client";

import Link from "next/link";
import { useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import { NAVBAR_HEIGHT } from "@/constants/layout";

export default function NhaDesRecords() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ButtonBase
            component={Link}
            href="/"
            aria-label="Vers la page d'Accueil de Nhadès Records"
            disableTouchRipple
            sx={btnSx}
        >
            <Box sx={boxSx}>
                <Box
                    sx={wrapperSx(isHovered, "right")}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Box
                        component="img"
                        src="/nhades/nha.svg"
                        alt="Nom du studio"
                        sx={nhaSx}
                    />
                </Box>
                <Box
                    sx={{...wrapperSx(isHovered, "left"), ml: "10px"}}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Box
                        component="img"
                        src="/nhades/des.svg"
                        alt="Nom du studio"
                        sx={desSx}
                    />
                </Box>
            </Box>
            <Box
                sx={wrapperSx(isHovered, "center")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Box
                    component="img"
                    src="/nhades/records.svg"
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
    height: "10px",
    width: "auto",
    mb: "5px",
};

const desSx = {
    display: "block",
    height: "13px",
    width: "auto",
    mb: "5px",
};

const recordsSx = {
    display: "block",
    width: "auto",
    height: "10px",
    mb: "5px",
    ml: "2px",
    mt: "10px",
};

const wrapperSx = (isHovered: boolean, transformOrigin: string) => ({
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -2,
    height: "1px",
    backgroundColor: "text.secondary",
    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: transformOrigin,
    transition: "transform 250ms cubic-bezier(.4,0,.2,1)",
  },

  ".MuiButtonBase-root:hover &::after, .MuiButtonBase-root:focus-visible &::after":
    {
      transform: "scaleX(1)",
    },
});
