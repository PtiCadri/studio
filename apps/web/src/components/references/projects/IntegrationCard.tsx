import { Box, Typography } from "@mui/material";

import AppleMusicIntegration from "./integrations/AppleMusic";
import DeezerIntegration from "./integrations/Deezer";
import SpotifyIntegration from "./integrations/Spotify";
import type { ActiveIntegration } from "./types";

import {
  backButtonSx,
  integrationHeaderSx,
  integrationWrapperSx,
  projectNameSx,
} from "./styles";

type Props = {
  name: string;
  activeIntegration: Exclude<ActiveIntegration, null>;
  integrations: {
    spotify_embed_url: string | null;
    deezer_embed_url: string | null;
    apple_music_embed_url: string | null;
  } | null;
  onBack: () => void;
};

export default function ProjectIntegrationCard({
  name,
  activeIntegration,
  integrations,
  onBack,
}: Props) {
  function renderIntegration() {
    if (activeIntegration === "spotify" && integrations?.spotify_embed_url) {
      return <SpotifyIntegration embedUrl={integrations.spotify_embed_url} />;
    }

    if (activeIntegration === "deezer" && integrations?.deezer_embed_url) {
      return <DeezerIntegration embedUrl={integrations.deezer_embed_url} />;
    }

    if (
      activeIntegration === "appleMusic" &&
      integrations?.apple_music_embed_url
    ) {
      return (
        <AppleMusicIntegration embedUrl={integrations.apple_music_embed_url} />
      );
    }

    return null;
  }

  return (
    <Box sx={integrationWrapperSx}>
      <Box sx={integrationHeaderSx}>
        <Typography sx={projectNameSx}>{name}</Typography>

        <Box component="button" onClick={onBack} sx={backButtonSx}>
          Retour
        </Box>
      </Box>

      {renderIntegration()}
    </Box>
  );
}
