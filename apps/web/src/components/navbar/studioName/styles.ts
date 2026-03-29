import { NAVBAR_HEIGHT } from "@/constants/layout";
import { type SxProps, type Theme } from "@mui/material";
import { type SystemStyleObject } from "@mui/system";

const nhaIconSx: SxProps<Theme> = {
    display: "block",
    height: "10px",
    width: "auto",
    mb: "5px",
};

const desIconSx: SxProps<Theme> = {
    display: "block",
    height: "13px",
    width: "auto",
    mb: "5px",
};

const recordsIconSx: SxProps<Theme> = {
    display: "block",
    width: "auto",
    height: "10px",
    mb: "5px",
    ml: "2px",
    mt: "10px",
};

const studioNameBtnSx: SxProps<Theme> = {
    height: NAVBAR_HEIGHT,
    maxWidth: "175px",
    width: "175px",
    pl: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const nhadesWrapperSx: SxProps<Theme> = {
    width: "175px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
};

const studioNameWrapperSx = (
    transformOrigin: string
): SystemStyleObject<Theme> => ({
    position: "relative",

    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -2,
        height: "1px",
        backgroundColor: "text.secondary",
        transform: "scaleX(0)",
        transformOrigin: transformOrigin,
        transition: "transform 250ms cubic-bezier(.4,0,.2,1)",
    },

    ".MuiButtonBase-root:hover &::after, .MuiButtonBase-root:focus-visible &::after":
        {
            transform: "scaleX(1)",
        },
});

export {
    desIconSx,
    nhadesWrapperSx,
    nhaIconSx,
    recordsIconSx,
    studioNameBtnSx,
    studioNameWrapperSx,
};
