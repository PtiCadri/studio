import { Box } from "@mui/material";
import Prestation from "@/components/tarifs/Prestation";
import { prestations } from "@/constants/tarifs";

export default function Prestations() {
    return (
        <Box sx={boxSx}>
            {prestations.map((prestation) => (
                <Prestation
                    key={prestation.key}
                    prestation={prestation}
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
