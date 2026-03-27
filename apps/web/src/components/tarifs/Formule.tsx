import GlassySurface from "@/components/ui/GlassySurface";
import { type Formule as formule } from "@/constants/formules";
import { Box, Typography } from "@mui/material";

export default function Formule({ formule }: { formule: formule }) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Box>
        <Box sx={iconSx(formule.color)} />

        <Typography sx={formuleSx} gutterBottom>
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

const surfaceSx = {
  width: "100%",
  height: "250px",
  mb: "50px",
  mt: "50px",
  display: "flex",
  flexDirection: "column",
  mx: 3,
  px: 3,
};

const iconSx = (color: string) => ({
  width: "25px",
  height: "25px",
  backgroundColor: color,
  borderRadius: "50%",
});

const formuleSx = {
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
