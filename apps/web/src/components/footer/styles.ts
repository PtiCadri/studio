import type { SxProps, Theme } from "@mui/material";

const bottomInfosSx: SxProps<Theme> = {
    width: { sm: "600px", lg: "100%" },
    height: { xs: "350px", sm: "auto" },
    display: "flex",
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: { xs: "space-around", lg: "space-between" },
    flexDirection: { xs: "column", sm: "row" },
};

const surfaceSx: SxProps<Theme> = {
    width: "100%",
    height: { xs: "fit-content", lg: "400px" },
    mt: "50px",
    pb: { xs: "30px", lg: "0px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px",
};

const containerSx: SxProps<Theme> = {
    height: "100%",
    width: "100%",
    maxWidth: "1150px",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    justifyContent: "space-around",
    color: "text.secondary",
};

const buttonSx: SxProps<Theme> = {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    margin: "0px",
    padding: "0px",
    marginBottom: "0.35em",
    boxSizing: "inherit",
    color: "text.secondary",
    display: "flex",
    justifyContent: "left",

    "&:hover": {
        backgroundColor: "transparent",
        color: "text.primary",
    },
};

const stackSx: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: "0px",
};

export { bottomInfosSx, buttonSx, containerSx, stackSx, surfaceSx };
