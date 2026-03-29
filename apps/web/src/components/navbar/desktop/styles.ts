import { SxProps, Theme } from "@mui/material";

const stackSx: SxProps<Theme> = {
    height: "80px",
    width: "100%",
    maxWidth: "700px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};

const btnSx = (isActive: boolean): SxProps<Theme> => ({
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

export { btnSx, stackSx };
