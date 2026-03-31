import Prestation from "@/components/tarifs/Prestation";
import { Box } from "@mui/material";
import { prestations } from "./constants";
import { gridSx } from "./styles";

export default function Prestations() {
  return (
    <Box sx={gridSx}>
      {prestations.map((prestation) => (
        <Prestation key={prestation.key} prestation={prestation} />
      ))}
    </Box>
  );
}
