import { Paper, type PaperProps } from "@mui/material";
import { glassSx, animatedBorderSx } from "@/theme/surfaces";

type GlassySurfaceProps = PaperProps & {
  animatedBorder?: boolean;
};

export default function GlassySurface({
  animatedBorder = false,
  sx,
  elevation = 0,
  ...props
}: GlassySurfaceProps) {
  return (
    <Paper
      elevation={elevation}
      {...props}
      sx={[
        animatedBorder ? animatedBorderSx() : null,
        glassSx(),
        { p: 2 }, // sensible default
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
