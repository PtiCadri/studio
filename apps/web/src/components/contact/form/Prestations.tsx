import { Prestations as pres } from "@/components/home/prestations/constants";
import { GlassySurface } from "@/components/ui";
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { formules } from "./constants";
import Formule from "./Formule";
import Service from "./Service";
import { formulesSx, prestationsSx, surfaceSx, titleSx } from "./styles";

import { ContactFormData, ServiceId } from "@/hooks/contact/useContactForm";

type PrestationsProps = {
  form: ContactFormData;
  handleServiceToggle: (service: ServiceId) => void;
};

export default function Prestations({
  form,
  handleServiceToggle,
}: PrestationsProps) {
  return (
    <GlassySurface sx={surfaceSx}>
      <FormControl sx={{ width: "100%", display: "block" }} required>
        <Typography sx={titleSx}>
          Quelles prestations vous intéressent ?
        </Typography>

        <FormLabel sx={{ pl: "5px" }}>Services</FormLabel>
        <FormGroup sx={prestationsSx}>
          {pres.map((prestation) => (
            <Service
              key={prestation.id}
              form={form}
              handleServiceToggle={handleServiceToggle}
              prestation={prestation}
            />
          ))}
        </FormGroup>

        <FormLabel sx={{ pl: "5px" }}>Formules</FormLabel>
        <FormGroup sx={formulesSx}>
          {formules.map((formule) => (
            <Formule
              key={formule.title}
              form={form}
              handleServiceToggle={handleServiceToggle}
              formule={formule}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Box component={Link} href="/tarifs" sx={contactLinkSx}>
        Consulter les tarifs
      </Box>
    </GlassySurface>
  );
}

const contactLinkSx = {
  mt: 3,
  textDecoration: "underline",
  textAlign: "right",
  color: "text.secondary",
  pl: "5px",
  "&:hover": {
    color: "text.primary",
  },
};
