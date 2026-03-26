import { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";
import GrilleTarifs from "@/components/tarifs/GrilleTarifs";
import Formules from "@/components/tarifs/Formules";

export const metadata: Metadata = {
    title: "Tarifs",
    description: "Découvrez les tarifs pratiqués par Nhadès Records.",
};

export default function Tarifs() {
    return (
        <GlassySurface sx={surfaceSx}>
            <Box
                component="img"
                src="/logo2.svg"
                alt="Logo du studio"
                sx={logoSx}
            />
            <Typography
                variant="h4"
                gutterBottom
                sx={{  textAlign: "center", mb: "70px" }}
            >
                Les Tarifs
            </Typography>
            <GrilleTarifs />
            <Formules />
        </GlassySurface>
    );
}

const surfaceSx = {
    width: "100%",
    maxWidth: "1150px",
    height: "auto",
    mt: "50px",
    pt: "110px",
    pb: "30px",
    mb: "30px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const logoSx = {
    position: "absolute",
    top: "55px",
    left: "55px",
    width: "auto",
    height: "160px",
    userSelect: "none",
};
