import { ServiceId } from "@/hooks/contact/useContactForm";
import { Box, ButtonBase } from "@mui/material";
import { buttonSx, contentSx, optionBoxSx, prestationIconSx } from "./styles";

type formuleId = "single" | "project" | "album";

export type formule = {
  id: formuleId;
  title: string;
  color: string;
};

type FormuleProps = {
  services: ServiceId[];
  handleServiceToggle: (service: ServiceId) => void;
  formule: formule;
};

export default function Formule({
  services,
  handleServiceToggle,
  formule,
}: FormuleProps) {
  const isSelected = services.includes(formule.id);

  return (
    <ButtonBase
      onClick={() => {
        handleServiceToggle(formule.id);
      }}
      aria-pressed={isSelected}
      aria-label={formule.title}
      sx={buttonSx}
    >
      <Box
        sx={{
          ...optionBoxSx(isSelected),
          ...contentSx,
        }}
      >
        <Box
          sx={{
            backgroundColor: formule.color,
            WebkitMask: "url(/icons/formule.svg) no-repeat center",
            mask: "url(/icons/formule.svg) no-repeat center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            ...prestationIconSx,
          }}
        />
        {formule.title}
      </Box>
    </ButtonBase>
  );
}
