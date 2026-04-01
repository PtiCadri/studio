import { Prestations } from "@/components/home/prestations/constants";
import { GlassySurface } from "@/components/ui";

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import {
  contentSx,
  optionBoxSx,
  prestationIconSx,
  prestationsSx,
  surfaceSx,
  titleSx,
} from "./styles";

import { ContactFormData, ServiceId } from "@/hooks/contact/useContactForm";

type ServicesProps = {
  form: ContactFormData;
  handleServiceToggle: (service: ServiceId) => void;
};

export default function Services({ form, handleServiceToggle }: ServicesProps) {
  return (
    <GlassySurface sx={surfaceSx}>
      <FormControl required sx={{ width: "100%", display: "block" }}>
        <Typography variant="h5" sx={titleSx}>
          Quels services vous intéressent ?
        </Typography>
        <FormLabel sx={{ pl: "5px" }}>Services</FormLabel>
        <FormGroup sx={prestationsSx}>
          {Prestations.map((prestation) => (
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
          ))}
        </FormGroup>
      </FormControl>
    </GlassySurface>
  );
}
