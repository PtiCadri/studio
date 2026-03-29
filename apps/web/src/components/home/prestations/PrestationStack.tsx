import { Stack } from "@mui/material";
import { Prestations } from "./constants";
import PrestationCard from "./PrestationCard";
import { stackSx } from "./styles";
import { PrestationId } from "./types";

type PrestationStackProps = {
  activeCard: PrestationId | null;
  onCardClick: (id: PrestationId) => void;
};

export default function PrestationStack({
  activeCard,
  onCardClick,
}: PrestationStackProps) {
  return (
    <Stack sx={stackSx}>
      {Prestations.map((prestation) => (
        <PrestationCard
          key={prestation.id}
          title={prestation.title}
          icon={prestation.icon}
          isActive={activeCard === prestation.id}
          onClick={() => onCardClick(prestation.id)}
        />
      ))}
    </Stack>
  );
}
