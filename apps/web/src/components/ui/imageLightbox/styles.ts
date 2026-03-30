import { SxProps, Theme } from "@mui/material";

const lightboxCloseButtonSx: SxProps<Theme> = {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
};

const lightboxContentSx: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 0,
    overflow: "hidden",
    touchAction: "none",
    userSelect: "none",
};

const lightboxImageSx = {
    width: "fit-content",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100dvh",
    objectFit: "contain" as const,
};

const lightboxImageWrapperSx: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const lightboxPaperSx: SxProps<Theme> = {
    width: "100%",
    height: "100dvh",
    maxWidth: "100%",
    maxHeight: "100dvh",
    margin: 0,
    borderRadius: 0,
    backgroundColor: "rgba(0, 0, 0, 0.96)",
    backgroundImage: "none",
    boxShadow: "none",
};

export {
    lightboxCloseButtonSx,
    lightboxContentSx,
    lightboxImageSx,
    lightboxImageWrapperSx,
    lightboxPaperSx,
};
