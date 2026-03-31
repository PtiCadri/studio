import Prestation from "@/components/tarifs/Prestation";
import { prestations } from "@/constants/tarifs";
import { Box } from "@mui/material";
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
