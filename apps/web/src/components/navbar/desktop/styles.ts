import { SxProps, Theme } from "@mui/material";

const stackSx: SxProps<Theme> = {
    height: "80px",
    width: "100%",
    maxWidth: "700px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};

const logoSx: SxProps<Theme> = {
    height: "70px",
    mr: "15px",
    zIndex: 1,
};

export { logoSx, stackSx };
