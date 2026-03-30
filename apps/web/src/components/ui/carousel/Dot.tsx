import { Box } from "@mui/material";

import { dotSx } from "./styles";

type DotProps = {
  index: number;
  selectedIndex: number;
  scrollTo: (index: number) => void;
};

export default function Dot({ index, selectedIndex, scrollTo }: DotProps) {
  const isActive = index === selectedIndex;

  return (
    <Box
      component="button"
      onClick={() => scrollTo(index)}
      aria-label={`Go to slide ${index + 1}`}
      sx={dotSx(isActive)}
    />
  );
}
