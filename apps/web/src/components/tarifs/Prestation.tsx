import GlassySurface from "@/components/ui/GlassySurface";
import { type Prestation as prestation } from "@/constants/tarifs";
import { Box, Typography } from "@mui/material";

export default function Prestation({ prestation }: { prestation: prestation }) {
  return (
    <GlassySurface sx={surfaceSx}>
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

const surfaceSx = {
  width: "100%",
  height: "250px",
  mb: "50px",
  mt: "50px",
  display: "flex",
  flexDirection: "column",
  mx: 5,
  px: 3,
};

const prestationSx = {
  fontSize: ".9rem",
  lineHeight: 1.2,
  fontWeight: 400,
  color: "text.secondary",
  mt: "10px",
};

const descSx = {
  textJustify: "center",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "text.secondary",
};

const tarifSx = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  mb: "10px",
  mt: "20px",
};

const prixSx = {
  fontSize: "2rem",
  fontWeight: "bold",
  lineHeight: 1.5,
  color: "text.primary",
};

const unitSx = {
  fontSize: "1.1rem",
  lineHeight: 1.5,
  color: "text.secondary",
  ml: "8px",
  pb: "8px",
};
