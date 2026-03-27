import PrestationStack from "@/components/home/prestations/PrestationStack";
import GlassySurface from "@/components/ui/GlassySurface";
import {
  Prestations as Pres,
  PrestationId,
  PrestationsDescriptions,
} from "@/constants/prestations/prestations";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Prestations() {
  const [activeCard, setActiveCard] = useState<PrestationId | null>(null);

  const handleCardClick = (id: PrestationId) => {
    setActiveCard((current) => {
      if (current === id) {
        return null;
      }
      return id;
    });
  };

  const activePrestation = Pres.find((prestation) => {
    return prestation.id === activeCard;
  });

  const activeDescription = PrestationsDescriptions.find((prestation) => {
    return prestation.id === activeCard;
  });

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
              <Typography
                variant="h4"
                sx={{
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

const detailsCardSx = {
  mt: "40px",
  width: "1150px",
};
