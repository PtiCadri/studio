import { animatedBorderSx } from "@/theme/surfaces";
import { SxProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

const surfaceSx = (isActive: boolean): SystemStyleObject<Theme> => ({
    height: { xs: "100px", md: "150px" },
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: isActive ? "text.primary" : "text.secondary",
    cursor: "pointer",
    userSelect: "none",

    "&:hover": { lg: animatedBorderSx() },
});

const iconSx: SxProps<Theme> = {
    width: { xs: "25px", md: "40px" },
    height: { xs: "25px", md: "40px" },
};

const prestationCardSx: SxProps<Theme> = {
    fontSize: { xs: "1rem", md: "1.2rem" },
    textAlign: "center",
};

const stackSx: SxProps<Theme> = {
    display: "grid",
    width: "100%",
    gridTemplateColumns: {
        xs: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
    },
    gap: 2,
    justifyItems: "stretch",
    alignItems: "center",
    mb: 3,
};

export { iconSx, prestationCardSx, stackSx, surfaceSx };
