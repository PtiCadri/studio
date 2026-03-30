import type { SxProps, Theme } from "@mui/material";

const rootSx: SxProps<Theme> = {
    width: "100%",
    mb: "40px",
    userSelect: "none",
};

const viewportWrapperSx: SxProps<Theme> = {
    width: "100%",
};

const viewportSx: SxProps<Theme> = {
    overflow: "hidden",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: "4px",
};

const containerSx: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
};

const slideSx: SxProps<Theme> = {
    flex: "0 0 100%",
    minWidth: 0,
};

const slideInnerSx: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const controlsRowSx: SxProps<Theme> = {
    mt: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
};

const dotsSx: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    gap: 1,
};

const slideButtonSx: SxProps<Theme> = {
    width: "100%",
    display: "block",
    cursor: "zoom-in",
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

const lightboxContentSx: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    height: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 0,
};

const lightboxImageWrapperSx: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const lightboxCloseButtonSx: SxProps<Theme> = {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 2,
};

const lightboxImageSx = {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100dvh",
    objectFit: "contain" as const,
};

const dotSx = (isActive: boolean): SxProps<Theme> => ({
    width: 10,
    height: 10,
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    padding: 0,
    backgroundColor: isActive
        ? "rgba(255,255,255,0.9)"
        : "rgba(255,255,255,0.3)",
});

export {
    containerSx,
    controlsRowSx,
    dotsSx,
    dotSx,
    lightboxCloseButtonSx,
    lightboxContentSx,
    lightboxImageSx,
    lightboxImageWrapperSx,
    lightboxPaperSx,
    rootSx,
    slideButtonSx,
    slideInnerSx,
    slideSx,
    viewportSx,
    viewportWrapperSx,
};
