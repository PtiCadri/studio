import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import {
  descSx,
  iconSx,
  prixSx,
  surfaceSx,
  tarifSx,
  titreSx,
  unitSx,
} from "./styles";
import { type Formule as formule } from "./types";

export default function Formule({ formule }: { formule: formule }) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box>
        <Box sx={iconSx(formule.color)} />

        <Typography sx={titreSx} gutterBottom>
          {formule.titre}
        </Typography>
      </Box>

      <Box sx={tarifSx}>
        <Typography variant="body1" sx={prixSx}>
          {formule.tarif.prix}
        </Typography>
        {formule.tarif.unit && (
          <Typography variant="body1" sx={unitSx}>
            {formule.tarif.unit}
          </Typography>
        )}
      </Box>

      <Typography variant="body1" sx={descSx}>
        {formule.description}
      </Typography>
    </GlassySurface>
  );
}
