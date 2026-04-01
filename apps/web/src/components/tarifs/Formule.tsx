import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import { descSx, prixSx, surfaceSx, tarifSx, titreSx, unitSx } from "./styles";
import { type Formule as formule } from "./types";

export default function Formule({ formule }: { formule: formule }) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box>
        <Box
          sx={{
            height: "35px",
            width: "35px",
            backgroundColor: formule.color,
            WebkitMask: "url(/icons/formule.svg) no-repeat center",
            mask: "url(/icons/formule.svg) no-repeat center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />

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
