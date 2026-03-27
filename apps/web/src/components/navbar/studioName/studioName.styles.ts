import { NAVBAR_HEIGHT } from "@/constants/layout";

const nhaIconSx = {
    display: "block",
    height: "10px",
    width: "auto",
    mb: "5px",
};

const desIconSx = {
    display: "block",
    height: "13px",
    width: "auto",
    mb: "5px",
};

const recordsIconSx = {
    display: "block",
    width: "auto",
    height: "10px",
    mb: "5px",
    ml: "2px",
    mt: "10px",
};

const studioNameBtnSx = {
    height: NAVBAR_HEIGHT,
    maxWidth: "175px",
    width: "175px",
    pl: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const nhadesWrapperSx = {
    width: "175px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
};

const studioNameWrapperSx = (isHovered: boolean, transformOrigin: string) => ({
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

export {
    desIconSx,
    nhadesWrapperSx,
    nhaIconSx,
    recordsIconSx,
    studioNameBtnSx,
    studioNameWrapperSx,
};
