import { GlassySurface } from "@/components/ui";
import { Box, Typography } from "@mui/material";
import { iconSx, prestationCardSx, surfaceSx } from "./styles";

type PrestationCardProps = {
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
};

export default function PrestationCard({
  title,
  icon,
  isActive,
  onClick,
}: PrestationCardProps) {
  return (
    <GlassySurface
      sx={surfaceSx(isActive)}
      animatedBorder={isActive}
      onClick={onClick}
    >
      <Box component="img" src={`/icons/${icon}.svg`} sx={iconSx} />
      <Typography variant="h6" sx={prestationCardSx}>
        {title}
      </Typography>
    </GlassySurface>
  );
}
