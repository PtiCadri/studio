import { Typography, Box } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";

export default function PresentationStudio() {

    return (
       <GlassySurface sx={{ width: "100%", maxWidth: '1150px', mb: "50px"}}>
            <Typography
                variant="h4"
                sx={{
                    mb: "20px",
                    fontWeight: "bold",
                }}
            >
                Le Studio
            </Typography>

            <Typography sx={bodySx} variant="body1" gutterBottom>
                Situé à <strong>Bihorel, à 5 minutes de Rouen</strong> et accessible en bus, Nha Dès Records
                est un <strong>studio d’enregistrement professionnel</strong> dédié à la <strong>production musicale</strong> et à
                l’<strong>accompagnement d’artistes</strong>.
            </Typography>

            <Typography sx={bodySx} variant="body1" gutterBottom>
                Le studio dispose d’<strong>un espace de 30 m² traité acoustiquement</strong>, permettant une
                écoute précise et un travail sonore adapté aux exigences actuelles de
                diffusion. Il accueille les artistes pour l’<strong>enregistrement</strong>, le <strong>mixage</strong> et le
                <strong> mastering</strong>, ainsi que pour la <strong>préparation de projets et de performances live</strong>.
            </Typography>
       </GlassySurface>
    );
}

const bodySx = {
    color: "text.secondary",
    lineHeight: 1.5,
    fontSize: "1.1rem",
    pl: "5px",
    mb: "10px"
}
