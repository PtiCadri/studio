import { Box } from "@mui/material";

import { iframeSx } from "../styles";
import type { IntegrationProps } from "../types";

export default function AppleMusicIntegration({ embedUrl }: IntegrationProps) {
  return (
    <Box
      component="iframe"
      src={embedUrl}
      sx={{ ...iframeSx, height: 450 }}
      allow="forms; popups; same-origin; scripts; storage-access-by-user-activation; top-navigation-by-user-activation"
      loading="lazy"
    />
  );
}
