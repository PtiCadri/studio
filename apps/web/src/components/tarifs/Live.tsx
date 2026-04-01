import { GlassySurface } from "@/components/ui";
import { Box, Typography } from "@mui/material";
import { descSx, prixSx, tarifSx, titreSx, unitSx } from "./styles";

export default function Live() {
  return (
    <Box sx={liveGridSx}>
      <GlassySurface>
        <Box>
          <Box
            component="img"
            src="/icons/setup.svg"
            alt="Setup"
            sx={{ width: "35px", height: "35px" }}
          />

          <Typography sx={titreSx} gutterBottom>
            SETUP
          </Typography>
        </Box>

        <Box sx={tarifSx}>
          <Typography variant="body1" sx={prixSx}>
            10 €
          </Typography>

          <Typography variant="body1" sx={unitSx}>
            / heure
          </Typography>
        </Box>

        <Typography variant="body1" sx={descSx}>
          Répétition + Préparation de set
        </Typography>
      </GlassySurface>

      <GlassySurface>
        <Box>
          <Box
            component="img"
            src="/icons/live.svg"
            alt="Live"
            sx={{ width: "35px", height: "35px" }}
          />

          <Typography sx={titreSx} gutterBottom>
            LIVE
          </Typography>
        </Box>

        <Box sx={tarifSx}>
          <Typography variant="body1" sx={prixSx}>
            100 €
          </Typography>

          <Typography variant="body1" sx={unitSx}>
            / cachet
          </Typography>
        </Box>

        <Typography variant="body1" sx={descSx}>
          Concert
        </Typography>
      </GlassySurface>
    </Box>
  );
}

const liveGridSx = {
  display: "grid",
  width: "100%",
  height: "auto",
  mt: { xs: "30px", md: "50px" },
  gap: 3,
  justifyItems: "stretch",
  alignItems: "center",
  gridTemplateColumns: {
    sm: "repeat(2, 1fr)",
  },
};
