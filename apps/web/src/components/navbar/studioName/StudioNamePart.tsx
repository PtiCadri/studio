import { Box } from "@mui/material";
import { useState } from "react";

import { studioNameWrapperSx } from "./studioName.styles";
import { type StudioNameIcon } from "./studioName.types";

export default function StudioNamePart({ icon }: { icon: StudioNameIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      key={icon.key}
      sx={{
        ...studioNameWrapperSx(isHovered, icon.transformOrigin),
        ...icon.margin,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        component="img"
        src={`/nhades/${icon.icon}`}
        alt="Nom du studio"
        sx={icon.sx}
      />
    </Box>
  );
}
