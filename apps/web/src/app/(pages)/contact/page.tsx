import { Metadata } from "next";
import { Box,Stack, Typography } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";
import Form from "@/components/contact/Form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Nhadès Records pour toute information ou demande de collaboration.",
};

export default function Contact() {
    return (
        <>
            <GlassySurface sx={surfaceSx}>
                <Box
                    component="img"
                    src="/logo2.svg"
                    alt="Logo du studio"
                    sx={logoSx}
                />
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{  textAlign: "center", fontSize: "2.5rem", mb: "70px" }}
                >
                    Contactez le Studio
                </Typography>
                <Form />
            </GlassySurface>
        </>
    );
}



const surfaceSx = {
    width: "100%",
    maxWidth: "1150px",
    height: "auto",
    mt: "50px",
    pt: "110px",
};

const logoSx = {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "auto",
    height: "120px",
    userSelect: "none",
};
