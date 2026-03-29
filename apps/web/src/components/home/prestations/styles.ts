import { animatedBorderSx } from "@/theme/surfaces";
import { SxProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system";

const surfaceSx = (isActive: boolean): SystemStyleObject<Theme> => ({
    height: { xs: "100px", sm: "150px" },
    width: { xs: "150px", sm: "250px" },

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
    width: { xs: "25px", sm: "40px" },
    height: { xs: "25px", sm: "40px" },
};

const prestationCardSx: SxProps<Theme> = {
    fontSize: { xs: "1rem", sm: "1.2rem" },
    textAlign: "center",
};

const stackSx: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "30px", lg: "50px" },
};

const detailsCardSx: SxProps<Theme> = {
    mt: "40px",
    width: "100%",
    maxWidth: "1150px",
};

export { detailsCardSx, iconSx, prestationCardSx, stackSx, surfaceSx };
