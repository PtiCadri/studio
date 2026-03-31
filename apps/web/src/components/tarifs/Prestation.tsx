import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import {
  descSx,
  prestationSx,
  prixSx,
  surfacePrestationSx,
  tarifSx,
  unitSx,
} from "./styles";
import { type Prestation as prestation } from "./types";

export default function Prestation({ prestation }: { prestation: prestation }) {
  return (
    <GlassySurface sx={surfacePrestationSx}>
      <Box>
        <Box
          component="img"
          src={prestation.iconPath}
          alt="Logo du studio"
          sx={{ height: "35px", width: "35px" }}
        />

        <Typography sx={prestationSx} gutterBottom>
          {prestation.titre}
        </Typography>
      </Box>

      <Box sx={tarifSx}>
        <Typography variant="body1" sx={prixSx}>
          {prestation.tarif.prix}
        </Typography>

        {prestation.tarif.unit && (
          <Typography variant="body1" sx={unitSx}>
            {prestation.tarif.unit}
          </Typography>
        )}
      </Box>

      <Typography variant="body1" sx={descSx}>
        {prestation.description}
      </Typography>
    </GlassySurface>
  );
}
