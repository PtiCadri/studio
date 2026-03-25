import { Box } from "@mui/material";
import SocialIcons from "./SocialIcons";

export default function SocialLinks() {

    return (
        <Box sx={containerSx}>
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

const containerSx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
};

const logoSx = {
    width: "auto",
    height: "180px",
};


