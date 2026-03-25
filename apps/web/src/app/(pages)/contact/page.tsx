import { Metadata } from "next";
import { Box } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Nhadès Records pour toute information ou demande de collaboration.",
};

export default function Contact() {
    return (
        <>
            <GlassySurface sx={surfaceSx}>

            </GlassySurface>
        </>
    );
}

const surfaceSx = {
    width: "100%",
    maxWidth: "1150px",
    height: "auto",

    position: "absolute",
};
