import { Prestation } from "@/components/home/prestations/types";
import { ContactFormData, ServiceId } from "@/hooks/contact/useContactForm";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { contentSx, optionBoxSx, prestationIconSx } from "./styles";

type ServiceProps = {
  form: ContactFormData;
  handleServiceToggle: (service: ServiceId) => void;
  prestation: Prestation;
};

export default function Service({
  form,
  handleServiceToggle,
  prestation,
}: ServiceProps) {
  return (
    <FormControlLabel
      key={prestation.id}
      sx={{
        width: "100%",
        display: "block",
        m: 0,
      }}
      control={
        <Checkbox
          checked={form.services.includes(prestation.id)}
          onChange={() => {
            handleServiceToggle(prestation.id);
          }}
          sx={{ display: "none" }}
        />
      }
      label={
        <Box
          sx={{
            ...optionBoxSx(form.services.includes(prestation.id)),
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
      }
    />
  );
}
