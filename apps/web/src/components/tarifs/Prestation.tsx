import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import { descSx, prixSx, surfaceSx, tarifSx, titreSx, unitSx } from "./styles";
import { type Prestation as prestation } from "./types";

export default function Prestation({ prestation }: { prestation: prestation }) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box>
        <Box
          component="img"
          src={prestation.iconPath}
          alt="Prestation Icon"
          sx={{ height: "35px", width: "35px" }}
        />

        <Typography sx={titreSx} gutterBottom>
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
