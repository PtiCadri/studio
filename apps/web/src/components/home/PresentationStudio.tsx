import { Typography } from "@mui/material";

export default function PresentationStudio() {

    return (
       <>
            <Typography variant="h4" sx={{ mb: 5, fontWeight: 500, justifyContent: "center", display: "flex" }}>
                Le studio
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
       </>
    );
}

const bodySx = {
    color: "text.secondary",
    lineHeight: 1.8,
    fontSize: "1.2rem",
    pl: "15px",
    mb: "15px",
};
