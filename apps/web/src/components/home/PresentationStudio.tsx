import { Typography, Box } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";

export default function PresentationStudio() {

    return (
       <GlassySurface sx={{ width: "100%", maxWidth: 'xl', pt: 2, mb: "50px"}}>
            <Typography
                variant="h2"
                sx={{
                    mb: 5,
                    fontWeight: 500,
                    // borderLeft: "6px solid",
                    // borderColor: "primary.main",
                    pl: 2
                }}
            >
                LE STUDIO
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

            <Typography sx={bodySx} variant="body1" gutterBottom>
                Fort de plusieurs années d’expérience en production musicale, Nha Dès Records
                propose <strong>un cadre de travail sérieux et soigné</strong>, pensé pour permettre aux
                artistes de <strong>développer leur identité sonore dans des conditions professionnelles</strong>.
            </Typography>
       </GlassySurface>
    );
}

const bodySx = {
    color: "text.secondary",
    lineHeight: 1.5,
    fontSize: "1.7rem",
    mb: "25px",
};
