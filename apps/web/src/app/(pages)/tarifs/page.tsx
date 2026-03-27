import { Metadata } from "next";
import { Box } from "@mui/material";
import Prestations from "@/components/tarifs/Prestations";
import Formules from "@/components/tarifs/Formules";

export const metadata: Metadata = {
    title: "Tarifs",
    description: "Découvrez les tarifs pratiqués par Nhadès Records.",
};

export default function Tarifs() {
    return (
        <Box sx={containerSx}>
            <Box
                component="img"
                src="/logo2.svg"
                alt="Logo"
                sx={{ width: "auto", height: "300px", userSelect: "none" }}
            />
            <Prestations />
            <Box sx={dividerSx}/>
            <Formules />
        </Box>
    );
}

const containerSx = {
    width: "100%",
    maxWidth: "1150px",
    mb: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const dividerSx = {
    width: "1080px",
    height: "1px",
    backgroundColor: "divider",
};
