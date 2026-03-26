"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { formules } from "@/constants/formules";
import Formule from "@/components/tarifs/Formule";

export default function Formules() {
    return (
        <Box sx={containerSx}>
            <Typography variant="h4" sx={{ mb: "30px" }} gutterBottom>
                Formules disponibles :
            </Typography>

            {formules.map((formule) => (
                <Formule key={formule.titre} formule={formule} />
            ))}

            <Typography
                variant="h6"
                sx={{ mt: "50px", color: "text.secondary" }}
                gutterBottom
            >
                Pour tout autre prestation ou demande particulière, 
                faites-le savoir dans votre 
                <Box
                    component={Link}
                    href="/contact"
                    sx={{
                            textDecoration: "underline",
                            color: "text.secondary",
                            pl: "5px",
                            "&:hover": {
                                color: "text.primary",
                            },
                        }}
                >
                    message de contact
                </Box>
            </Typography>
        </Box>
    );
}

const containerSx = {
    width: "950px",
    mb: "50px",
};

