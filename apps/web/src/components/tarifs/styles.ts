import { SxProps, Theme } from "@mui/material";

// FORMULES
const surfaceFormuleSx: SxProps<Theme> = {
    width: "100%",
    height: "250px",
    mb: "50px",
    mt: "50px",
    display: "flex",
    flexDirection: "column",
    mx: 3,
    px: 3,
};

const iconSx: (color: string) => SxProps<Theme> = (color) => ({
    width: "25px",
    height: "25px",
    backgroundColor: color,
    borderRadius: "50%",
});

const formuleSx: SxProps<Theme> = {
    fontSize: ".9rem",
    lineHeight: 1.2,
    fontWeight: 400,
    color: "text.secondary",
    mt: "10px",
};

// PRESTATIONS
const surfacePrestationSx = {
    width: "100%",
    height: "250px",
    mb: "50px",
    mt: "50px",
    display: "flex",
    flexDirection: "column",
    mx: 5,
    px: 3,
};

const prestationSx = {
    fontSize: ".9rem",
    lineHeight: 1.2,
    fontWeight: 400,
    color: "text.secondary",
    mt: "10px",
};

// GENERAL
const descSx: SxProps<Theme> = {
    textJustify: "center",
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "text.secondary",
};

const tarifSx: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    mb: "10px",
    mt: "20px",
};

const prixSx: SxProps<Theme> = {
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: 1.5,
    color: "text.primary",
};

const unitSx: SxProps<Theme> = {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    color: "text.secondary",
    ml: "8px",
    pb: "8px",
};

export {
    descSx,
    formuleSx,
    iconSx,
    prestationSx,
    prixSx,
    surfaceFormuleSx,
    surfacePrestationSx,
    tarifSx,
    unitSx,
};
