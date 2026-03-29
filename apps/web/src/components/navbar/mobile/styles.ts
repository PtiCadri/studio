import type { MenuProps, PopoverOrigin, SxProps, Theme } from "@mui/material";

const mainBtnSx: SxProps<Theme> = {
    color: "text.primary",
    textTransform: "none",
    minWidth: "auto",
    px: 1,
};

const pageNameSx: SxProps<Theme> = {
    fontSize: "1.5rem",
    fontWeight: 300,
    mr: 0.5,
};

const expandIconSx = (isOpen: boolean): SxProps<Theme> => ({
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 200ms ease",
});

const menuAnchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: "center",
};

const menuTransformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: "center",
};

const menuSlotProps: MenuProps["slotProps"] = {
    paper: {
        sx: {
            mt: 1,
            minWidth: 220,
            backgroundColor: "rgba(10, 10, 10, 0.9)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
        },
    },
};

export {
    expandIconSx,
    mainBtnSx,
    menuAnchorOrigin,
    menuSlotProps,
    menuTransformOrigin,
    pageNameSx,
};
