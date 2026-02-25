"use client";

import Link from "next/link";
import { Box, ButtonBase } from "@mui/material";
import { NAVBAR_HEIGHT } from "@/constants/layout";
import { montserrat } from "@/theme/fonts";

export default function NhadesRecords({ isActive = false }: { isActive?: boolean }) {
  return (
    <ButtonBase
        component={Link}
        href="/"
        aria-label="Vers la page d'Accueil de Nhadès Records"
        disableTouchRipple
        sx={btnSx}
    >
        <Box sx={labelSx(isActive)}>
            <Box
                component="span"
                className={montserrat.variable}
                sx={nhadesSx(isActive)}
            >
                NHADÈS
            </Box>
            <Box
                component="span"
                className={montserrat.variable}
                sx={recordsSx(isActive)}
            >
                RECORDS
            </Box>
        </Box>
    </ButtonBase>
  );
}

const nhadesSx = (isActive: boolean) => ({
    mr: "28px",
    ...wordSx,
    ...afterSx(isActive)
});

const recordsSx = (isActive: boolean) => ({
    ml: "20px",
    my: "6px",
    fontWeight: 300 ,
    ...wordSx,
    ...afterSx(isActive)
});

const btnSx = {
    height: NAVBAR_HEIGHT,
    pl: "20px",
};

const labelSx = (isActive: boolean) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: 500,
    color: isActive ? "text.primary" : "text.secondary",
    "&:hover": {
        color: "text.primary",
    },
});

const wordSx = {
    position: "relative",
    height: "26px",

    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
};

const afterSx = (isActive: boolean) => ({
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

    ".MuiButtonBase-root:hover &::after, .MuiButtonBase-root:focus-visible &::after": {
        transform: "scaleX(1)",
    },
});
