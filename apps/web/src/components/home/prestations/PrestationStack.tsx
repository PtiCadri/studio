import { PrestationCard } from "@/components/home/prestations";
import { PrestationId, Prestations } from "@/constants/prestations/prestations";
import { Stack } from "@mui/material";
import { stackSx } from "./styles";

interface PrestationStackProps {
  activeCard: PrestationId | null;
  onCardClick: (id: PrestationId) => void;
}

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
