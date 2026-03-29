import { Box } from "@mui/material";

import { studioNameWrapperSx } from "@/components/navbar/studioName/styles";
import { type StudioNamePartProps } from "@/components/navbar/studioName/types";

export default function StudioNamePart({ icon }: StudioNamePartProps) {
  return (
    <Box
      sx={{
        ...studioNameWrapperSx(icon.transformOrigin),
        ...(icon.margin && icon.margin),
      }}
    >
      <Box
        component="img"
        src={`/nhades/${icon.icon}`}
        alt=""
        aria-hidden="true"
        sx={icon.style}
      />
    </Box>
  );
}
