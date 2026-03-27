import { Box } from "@mui/material";
import Formule from "./Formule";
import { formules } from "@/constants/formules";

export default function Formules() {
    return (
        <Box sx={boxSx}>
            {formules.map((formule) => (
                <Formule
                    key={formule.titre}
                    formule={formule}
                />
            ))}
        </Box>
    );
}

const boxSx = {
    display : "flex",
    flexDirection: "row",
    width: "100%",
};
