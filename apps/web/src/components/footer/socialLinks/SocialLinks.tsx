import { Box } from "@mui/material";
import SocialIcons from "./socialIcons";

export default function SocialLinks() {

    return (
        <Box sx={leftPartSx}>
            <Box
                component="img"
                src="/logo2.svg"
                alt="Logo"
                sx={logoSx}
            />
            <SocialIcons />
        </Box>
    );
}

const leftPartSx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
};

const logoSx = {
    width: "auto",
    height: "230px",
};


