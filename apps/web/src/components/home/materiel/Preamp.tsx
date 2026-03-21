import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Preamp() {
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
                Préampli Neve 1073SX
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
                <Box sx={boxSx}>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                          Le signal micro passe par un <strong>préamplificateur Neve 1073SPX</strong> avant conversion. 
                          Ce circuit analogique reconnu <strong>apporte de la présence et de la densité à la 
                          prise de son</strong>, tout en conservant la précision nécessaire au mixage moderne.
                    </Typography>
                    <Typography sx={bodySx} variant="body1" gutterBottom>
                         Il permet notamment de <strong>donner du relief aux voix</strong> et de <strong>stabiliser leur place 
                         dans le morceau dès l’enregistrement</strong>, réduisant le besoin de corrections 
                         artificielles par la suite.
                         L’association du préampli analogique et de la conversion numérique assure 
                         une <strong>base sonore solide dès la capture</strong>.
                    </Typography>
                </Box>
                <Image
                    src="/matos/preamp.jpg"
                    alt="Studio"
                    width={800}
                    height={599}
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
