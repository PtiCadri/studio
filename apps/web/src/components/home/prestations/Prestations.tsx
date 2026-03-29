import GlassySurface from "@/components/ui/GlassySurface";
import usePrestations from "@/hooks/prestations/usePrestations";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import PrestationStack from "./PrestationStack";
import { detailsCardSx } from "./styles";

export default function Prestations() {
  const { activeCard, activePrestation, activeDescription, handleCardClick } =
    usePrestations();

  return (
    <Box sx={{ mb: "50px" }}>
      <PrestationStack activeCard={activeCard} onCardClick={handleCardClick} />

      <AnimatePresence initial={false}>
        {activePrestation && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <GlassySurface key={activePrestation.id} sx={detailsCardSx}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: "20px" }}>
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
