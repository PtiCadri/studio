import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";

import { ContactFormData, ServiceId } from "@/lib/contact/contact.types";

import { Prestations } from "@/constants/prestations/prestations";

interface ServicesProps {
  form: ContactFormData;
  handleServiceToggle: (service: ServiceId) => void;
}

export default function Services({ form, handleServiceToggle }: ServicesProps) {
  return (
    <>
      <FormControl required>
        <Typography variant="h5" sx={{ pl: "5px", mt: 3, mb: 2 }}>
          Quels services vous intéressent ?
        </Typography>
        <FormLabel>Services</FormLabel>
        <FormGroup sx={prestationsSx}>
          {Prestations.map((prestation) => (
            <FormControlLabel
              key={prestation.id}
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
                <Box sx={optionBoxSx(form.services.includes(prestation.id))}>
                  <Box
                    component="img"
                    src={`/icons/${prestation.icon}.svg`}
                    sx={{ width: "30px", height: "30px" }}
                  />
                  {prestation.title}
                </Box>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
}

const prestationsSx = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "15px",
  justifyContent: "center",
  alignItems: "center",
  my: 2,
  userSelect: "none",
};

const optionBoxSx = (isSelected: boolean) => ({
  px: 2,
  py: 1.2,

  width: "155px",
  maxWidth: "155px",
  height: "100px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  textAlign: "center",

  borderRadius: "4px",
  border: "1px solid",
  borderColor: isSelected ? "primary.main" : "divider",
  color: isSelected ? "text.primary" : "text.secondary",
  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:hover": {
    border: "1px solid white",
    color: "text.primary",
  },
});
