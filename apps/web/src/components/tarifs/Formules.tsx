import { Box } from "@mui/material";
import { formules } from "./constants";
import Formule from "./Formule";
import { gridSx } from "./styles";

export default function Formules() {
  return (
    <Box sx={gridSx}>
      {formules.map((formule) => (
        <Formule key={formule.titre} formule={formule} />
      ))}
    </Box>
  );
}
