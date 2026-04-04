import { Box } from "@mui/material";

import { iframeSx } from "../styles";
import type { IntegrationProps } from "../types";

export default function SpotifyIntegration({ embedUrl }: IntegrationProps) {
  return (
    <Box
      component="iframe"
      src={embedUrl}
      sx={iframeSx}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
