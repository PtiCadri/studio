import { Stack, Button, Typography } from "@mui/material";
import Link from 'next/link';


export default function Links() {

    return (
        <Stack sx={stackSx}>
            <Button
                component={Link}
                href={"/contact"}
                aria-label="Contactez-nous"
                variant="text"
                disableRipple
                disableElevation
                sx={buttonSx}
            >
                Contact
            </Button>
            <Button
                component={Link}
                href={"/mentions-legales"}
                aria-label="Mentions légales"
                variant="text"
                disableRipple
                disableElevation
                sx={buttonSx}
            >
                Mentions légales
            </Button>
            <Button
                component={Link}
                href={"/conditions-generales-de-vente"}
                aria-label="Conditions générales de vente"
                variant="text"
                disableRipple
                disableElevation
                sx={buttonSx}
            >
                Conditions générales de vente
            </Button>
            <Typography variant="body2" gutterBottom>
                06.50.46.24.88
            </Typography>
            <Button
                component={Link}
                href={"/plan-du-site"}
                aria-label="Plan du site"
                variant="text"
                disableRipple
                disableElevation
                sx={buttonSx}
            >
                Plan du site
            </Button>
            <Typography variant="body2" gutterBottom>
                © 2026 Nha Dès Records
            </Typography>
        </Stack>
    );
}

const buttonSx = {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    margin: "0px",
    padding: "0px",
    marginBottom: "0.35em",
    boxSizing: "inherit",
    color: "text.secondary",
    display: "flex",
    justifyContent: "left",

    "&:hover": {
        backgroundColor: "transparent",
        color: "text.primary",
    },   
};

const stackSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    gap: "0px",
}
