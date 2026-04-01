import { ContactFormData, ServiceId } from "@/hooks/contact/useContactForm";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { contentSx, optionBoxSx, prestationIconSx } from "./styles";

type formuleId = "single" | "project" | "album";

export type formule = {
  id: formuleId;
  title: string;
  color: string;
};

type FormuleProps = {
  form: ContactFormData;
  handleServiceToggle: (service: ServiceId) => void;
  formule: formule;
};

export default function Formule({
  form,
  handleServiceToggle,
  formule,
}: FormuleProps) {
  return (
    <FormControlLabel
      key={formule.id}
      sx={{
        width: "100%",
        display: "block",
        m: 0,
      }}
      control={
        <Checkbox
          checked={form.services.includes(formule.id)}
          onChange={() => {
            handleServiceToggle(formule.id);
          }}
          sx={{ display: "none" }}
        />
      }
      label={
        <Box
          sx={{
            ...optionBoxSx(form.services.includes(formule.id)),
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
      }
    />
  );
}
