import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Enceintes() {
    return (
        <Box sx={mainSx}>
            <Typography
                variant="h3"
                sx={{
                    mb: 5,
                    fontWeight: 500,
                    borderLeft: "3px solid",
                    borderColor: "primary.main",
                    pl: 2,
                    ml: "30px",
                }}
            >
                Enceintes Adam Audio A7V
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
                <Box sx={boxSx}>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                         Le studio est équipé d’<strong>enceintes Adam Audio A7V de dernière génération</strong>, 
                         utilisées comme référence principale pour le travail de mixage et de mastering. 
                         Leur <strong>technologie de tweeter à ruban</strong> permet une restitution très détaillée des hautes 
                         fréquences, essentielle pour contrôler la clarté des voix et l’équilibre du spectre.
                    </Typography>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                         La <strong>calibration Sonarworks</strong> est intégrée afin d’adapter la réponse 
                         fréquentielle à la pièce et garantir une écoute neutre. Associée 
                         au <strong>traitement acoustique du studio</strong>, cette configuration permet 
                         de prendre des décisions fiables qui se traduisent correctement sur 
                         tous les systèmes d’écoute.
                    </Typography>
                </Box>
                <Image
                    src="/matos/enceintes.jpg"
                    alt="Studio"
                    width={480}
                    height={480}
                    style={{ width: "auto", height: "400px", borderRadius: "6px" }}
                />
            </Box>
        </Box>
    );
}

const mainSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    py: "50px",
    borderBottom: "1px solid",
    borderColor: "divider",
}

const bodySx = {
    color: "text.secondary",
    lineHeight: 1.5,
    fontSize: "1.7rem",
    mb: "25px",
};

const boxSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    ml: "30px",
    pr: "25px",
}
