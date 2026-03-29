import { Box } from "@mui/material";

import { type StudioNamePartProps } from "@/components/navbar/studioName/types";
import { underlinedWrapperSx } from "../styles";

export default function StudioNamePart({ icon }: StudioNamePartProps) {
  return (
    <Box
      sx={{
        ...underlinedWrapperSx(icon.transformOrigin),
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
