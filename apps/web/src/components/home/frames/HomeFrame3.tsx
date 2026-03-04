import { Box, Typography } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";
import StudioHardwareAccordion, {
  HardwareItem,
} from "@/components/home/StudioHardwareAccordion";
import { SPEAKERS, SOUND_CARD, PREAMP, MIC1, MIC2 } from "@/constants/hardware";

const HARDWARE: HardwareItem[] = [
  {
    id: "speakers",
    title: "Enceintes - Adam Audio A7V",
    imageSrc: "/matos/enceintes.jpg",
    imageAlt: "Enceintes Adam Audio A7V",
    description: SPEAKERS,
  },
  {
    id: "soundcard",
    title: "Carte son - Apollo twin USB",
    imageSrc: "/matos/carte-son.jpg",
    imageAlt: "Carte son Apollo twin USB",
    description: SOUND_CARD,
  },
  {
    id: "preamp",
    title: "Préampli - Neve 1073SX",
    imageSrc: "/matos/preamp.jpg",
    imageAlt: "Préampli Neve 1073SX",
    description: PREAMP,
  },
  {
    id: "mic1",
    title: "Microphone - Sony C-80",
    imageSrc: "/matos/mic1.jpg",
    imageAlt: "Microphone Sony C-80",
    description: MIC1,
  },
  {
    id: "mic2",
    title: "Microphone - Neumann U87",
    imageSrc: "/matos/mic2.jpg",
    imageAlt: "Microphone Neumann U87",
    description: MIC2,
  },
];

export default function HomeFrame3() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlassySurface sx={{ width: "100%", maxWidth: "lg", mx: 4, pb: 4 }}>
        <Typography variant="h4" sx={{ my: 2, fontWeight: 500,  }}>
            Le matériel
        </Typography>
        <StudioHardwareAccordion items={HARDWARE} />
      </GlassySurface>
    </Box>
  );
}