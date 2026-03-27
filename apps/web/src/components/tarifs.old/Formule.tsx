import { Box, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { type Formule as formule } from "@/constants/formules";

interface FormuleProps {
    formule: formule
};

export default function Formule({ formule }: FormuleProps) {
    return (
        <Box sx={formuleSx}>
                <FiberManualRecordIcon
                    sx={{
                        mr: "10px",
                        height: "12px",
                        width: "12px",
                        color: "text.primary"
                    }}
                />
                <Typography sx={titreSx}>
                    {`${formule.titre} :`}
                </Typography>

                <Typography sx={descSx}>
                    {formule.description}
                </Typography>

                <ArrowForwardIcon
                    sx={{
                        mr: "10px",
                        height: "24px",
                        width: "24px"
                    }}
                />

                <Typography sx={prixSx}>
                    {formule.tarif.prix}
                </Typography>
            </Box>
    );
}

const formuleSx = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "text.secondary",
    pl: "5px",
    mb: "20px",
};

const titreSx = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "text.primary",
    mr: "10px",
};

const descSx = {
    fontSize: "1.2rem",
    mr: "10px",
};

const prixSx = {
    fontSize: "1.2rem",
    fontWeight: "bold",
};

