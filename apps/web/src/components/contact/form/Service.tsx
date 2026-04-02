import { Prestation } from "@/components/home/prestations/types";
import { ServiceId } from "@/hooks/contact/useContactForm";
import { Box, ButtonBase } from "@mui/material";
import { buttonSx, contentSx, optionBoxSx, prestationIconSx } from "./styles";

type ServiceProps = {
  services: ServiceId[];
  handleServiceToggle: (service: ServiceId) => void;
  prestation: Prestation;
};

export default function Service({
  services,
  handleServiceToggle,
  prestation,
}: ServiceProps) {
  const isSelected = services.includes(prestation.id);

  return (
    <ButtonBase
      onClick={() => {
        handleServiceToggle(prestation.id);
      }}
      aria-pressed={isSelected}
      aria-label={prestation.title}
      sx={buttonSx}
    >
      <Box
        sx={{
          ...optionBoxSx(isSelected),
          ...contentSx,
        }}
      >
        <Box
          component="img"
          src={`/icons/${prestation.icon}.svg`}
          sx={prestationIconSx}
        />
        {prestation.title}
      </Box>
    </ButtonBase>
  );
}
