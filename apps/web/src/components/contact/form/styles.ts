import { SxProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";
const formSx: SxProps<Theme> = {
    width: "100%",
    height: "min-content",
    ml: { sm: "20px" },
    mb: { xs: 5, sm: 0 },
};

const surfaceSx: SxProps<Theme> = {
    width: "100%",
    height: "auto",
    p: 3,
    mb: 3,
    display: "flex",
    flexDirection: "column",
};

const titleSx: SxProps<Theme> = {
    pl: "5px",
    mb: 2,
    fontWeight: 400,
    fontSize: { xs: "1.2rem", md: "1.5rem" },
};

const contentSx: SxProps<Theme> = {
    fontSize: { xs: "0.875rem", md: "1rem" },
};

const prestationsSx: SxProps<Theme> = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: {
        lg: "repeat(4, 1fr)",
        xs: "repeat(2, 1fr)",
    },
    gap: 2,
    userSelect: "none",
    mb: 3,
};

const formulesSx: SxProps<Theme> = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 2,
    userSelect: "none",
};

const prestationIconSx: SxProps<Theme> = {
    width: { xs: "25px", md: "30px" },
    height: { xs: "25px", md: "30px" },
};

const optionBoxSx: (isSelected: boolean) => SystemStyleObject<Theme> = (
    isSelected
) => ({
    px: 2,
    py: 1.2,

    width: "100%",
    height: "100px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",

    borderRadius: "4px",
    border: "1px solid",
    borderColor: isSelected ? "primary.main" : "divider",
    color: isSelected ? "text.primary" : "text.secondary",
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
        border: "1px solid white",
        color: "text.primary",
    },
});

export {
    contentSx,
    formSx,
    formulesSx,
    optionBoxSx,
    prestationIconSx,
    prestationsSx,
    surfaceSx,
    titleSx,
};
