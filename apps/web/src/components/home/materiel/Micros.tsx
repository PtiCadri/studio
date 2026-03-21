import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Micros() {
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
                Microphones Sony C-80 & Neumann U87
            </Typography>
            <Typography sx={{...bodySx, mx: "auto", mt: "25px", mb: "50px"}} variant="body1" gutterBottom>
                <strong>Le studio met à disposition plusieurs microphones adaptés aux 
                différentes voix et interprétations.</strong>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, py: "50px", borderBottom: "1px solid #383838" }}>
                <Box sx={boxSx}>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                        Le <strong>Sony C-80</strong>, microphone à condensateur large membrane 
                        inspiré du C-800, offre <strong>une grande définition et une restitution 
                        claire</strong> particulièrement adaptée aux voix modernes.
                    </Typography>
                </Box>
                <Image
                    src="/matos/mic1.jpg"
                    alt="Studio"
                    width={600}
                    height={600}
                    style={{ width: "auto", height: "400px", borderRadius: "6px" }}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2, pt: "50px" }}>
                <Box sx={boxSx}>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                        Le <strong>Neumann U87</strong>, microphone à condensateur large membrane <strong>considéré 
                        depuis 1967 comme la référence mondiale pour la voix studio</strong>.
                        Conçu à l’origine pour remplacer les micros à lampes en apportant  
                        <strong> stabilité et précision</strong>, il s’est imposé dans la quasi-totalité 
                        des studios professionnels et reste aujourd’hui un standard utilisé 
                        sur d’innombrables albums commerciaux.
                    </Typography>
                </Box>
                <Image
                    src="/matos/mic2.jpg"
                    alt="Studio"
                    width={600}
                    height={600}
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
