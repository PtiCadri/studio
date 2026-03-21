import { Box, Typography } from "@mui/material";
import Image from "next/image"

export default function CarteSon() {
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
                Carte son Apollo Twin USB
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
                <Box sx={boxSx}>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                         L’interface principale du studio est une <strong>Apollo Twin USB de Universal Audio</strong> 
                         , reconnue pour ses convertisseurs haut de gamme et son DSP 
                         intégré UAD-2. 
                         Elle permet l’<strong>enregistrement avec monitoring temps réel</strong> sans latence 
                         perceptible, y compris avec <strong>des simulations analogiques</strong> (préamplis, 
                         compresseurs, EQ) <strong>directement pendant la prise</strong>. Cela offre aux artistes 
                         <strong>un confort proche d’une chaîne hardware professionnelle</strong> dès 
                         l’enregistrement.
                    </Typography>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                         Le routing interne permet de créer plusieurs mixes casque indépendants, 
                         essentiel pour les sessions vocales ou les répétitions live.
                         En concert, elle sert également de centre de traitement : gestion du 
                         micro, compression, EQ, de-essing et effets en direct avec stabilité 
                         et rappel instantané des presets. 
                    </Typography>
                </Box>
                <Image
                    src="/matos/carte-son.jpg"
                    alt="Studio"
                    width={1920}
                    height={1920}
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
