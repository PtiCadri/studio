import { Box } from "@mui/material";

import { iframeSx } from "./styles";
import type { IntegrationProps } from "./types";

export default function DeezerIntegration({ embedUrl }: IntegrationProps) {
  return (
    <Box
      component="iframe"
      src={embedUrl}
      sx={iframeSx}
      allow="encrypted-media; clipboard-write; transparency"
      loading="lazy"
    />
  );
}
