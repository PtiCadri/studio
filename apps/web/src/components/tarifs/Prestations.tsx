import Prestation from "@/components/tarifs/Prestation";
import { Box } from "@mui/material";
import { prestations } from "./constants";
import { gridSx } from "./styles";

export default function Prestations() {
  return (
    <Box sx={{ ...gridSx, my: { xs: "30px", md: "50px" } }}>
      {prestations.map((prestation) => (
        <Prestation key={prestation.key} prestation={prestation} />
      ))}
    </Box>
  );
}
