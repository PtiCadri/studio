import { SxProps, Theme } from "@mui/material";

const gridSx: SxProps<Theme> = {
    display: "grid",
    width: "100%",
    height: "auto",
    my: "50px",
    gap: 3,
    justifyItems: "stretch",
    alignItems: "center",
    gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
    },
};

const surfaceSx: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    maxHeight: "270px",
    display: "flex",
    flexDirection: "column",
    px: 3,
};

const iconSx: (color: string) => SxProps<Theme> = (color) => ({
    width: "25px",
    height: "25px",
    backgroundColor: color,
    borderRadius: "50%",
    mb: "20px",
});

const titreSx: SxProps<Theme> = {
    fontSize: ".9rem",
    lineHeight: 1.2,
    fontWeight: 400,
    color: "text.secondary",
    mt: "10px",
};

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

export { descSx, gridSx, iconSx, prixSx, surfaceSx, tarifSx, titreSx, unitSx };
