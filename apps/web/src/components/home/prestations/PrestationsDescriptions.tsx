import { Box, type SxProps, type Theme, Typography } from "@mui/material";

const bodySx: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.5,
  fontSize: "1.1rem",
  pl: "5px",
  mb: "10px",
};

export const recordingDesc = (
  <Box>
    <Typography variant="body1" gutterBottom sx={bodySx}>
      L’enregistrement constitue la base de toute production musicale. La
      qualité de la prise de son conditionne directement le rendu final du
      mixage et du mastering.
    </Typography>

    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le studio Nha Dès Records dispose d’un espace traité acoustiquement
      permettant des prises propres et maîtrisées, adaptées aussi bien à la voix
      qu’aux instruments.
    </Typography>

    <Typography
      variant="body1"
      gutterBottom
      sx={{
        color: "text.secondary",
        fontWeight: 700,
        fontSize: "1.2rem",
        mt: "15px",
      }}
    >
      Le studio propose notamment :
    </Typography>

    <Typography variant="body1" gutterBottom sx={{ ...bodySx, pl: "10px" }}>
      - L'enregistrement de voix sur instrumentale ou composition originale
    </Typography>

    <Typography variant="body1" gutterBottom sx={{ ...bodySx, pl: "10px" }}>
      - La prise de son d’instruments
    </Typography>

    <Typography variant="body1" gutterBottom sx={{ ...bodySx, pl: "10px" }}>
      - La mise en forme de maquettes et titres définitifs
    </Typography>

    <Typography variant="body1" gutterBottom sx={{ ...bodySx, pl: "10px" }}>
      - La préparation de projets destinés à la diffusion ou à la scène
    </Typography>
  </Box>
);

export const mixingDesc = (
  <Box>
    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le mixage transforme vos pistes en un morceau clair, équilibré et
      professionnel. Il consiste à ajuster les volumes, les fréquences et
      l’espace sonore pour mettre en valeur votre musique.
    </Typography>

    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le mixage d'un projet peut se faire à partir d’enregistrements réalisés au
      studio ou de pistes envoyées à distance.
    </Typography>
  </Box>
);

export const masteringDesc = (
  <Box>
    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le mastering constitue la dernière étape de la production audio. Il permet
      d’optimiser le mixage afin d’obtenir un rendu homogène, équilibré et
      adapté aux standards de diffusion actuels.
    </Typography>

    <Typography variant="body1" gutterBottom sx={bodySx}>
      Chaque titre est traité individuellement afin de respecter son esthétique
      tout en assurant sa compatibilité avec les plateformes de streaming et les
      supports de diffusion.
    </Typography>

    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le mastering peut être réalisé sur des morceaux mixés au studio ou fournis
      à distance.
    </Typography>

    <Typography variant="body1" gutterBottom sx={bodySx}>
      Le fichier final livré est prêt à la publication.
    </Typography>
  </Box>
);

export const liveDesc = (
  <Box>
    <Typography variant="body1" gutterBottom sx={bodySx}>
      Répétitions live, préparation et construction de set, traitement de voix
      live, l’objectif est de permettre aux artistes d’aborder la scène avec un
      rendu maîtrisé, fidèle à l’univers développé en studio.
    </Typography>
  </Box>
);
