import { SxProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

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

const underlinedWrapperSx = (
    transformOrigin: string,
    isActive?: boolean
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
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: transformOrigin,
        transition: "transform 250ms cubic-bezier(.4,0,.2,1)",
    },

    ".MuiButtonBase-root:hover &::after, .MuiButtonBase-root:focus-visible &::after":
        {
            transform: "scaleX(1)",
        },
});

export { btnSx, underlinedWrapperSx };
