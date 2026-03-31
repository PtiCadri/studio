import GlassySurface from "@/components/ui/GlassySurface";
import usePrestations from "@/hooks/prestations/usePrestations";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import PrestationStack from "./PrestationStack";

export default function Prestations() {
  const { activeCard, activePrestation, activeDescription, handleCardClick } =
    usePrestations();

  return (
    <Box
      sx={{
        mb: "20px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PrestationStack activeCard={activeCard} onCardClick={handleCardClick} />

      <AnimatePresence initial={false}>
        {activePrestation && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <GlassySurface key={activePrestation.id} sx={{ mb: "20px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: "bold",
                  mb: "20px",
                }}
              >
                {activePrestation.title}
              </Typography>

              {activeDescription && <>{activeDescription.desc}</>}
            </GlassySurface>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
