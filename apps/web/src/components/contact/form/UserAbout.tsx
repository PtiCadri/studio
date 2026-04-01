import GlassySurface from "@/components/ui/GlassySurface";
import { ContactFormData } from "@/hooks/contact/useContactForm";
import { TextField, Typography } from "@mui/material";
import { contentSx, surfaceSx, titleSx } from "./styles";

type UserAboutProps = {
  form: ContactFormData;
  handleChange: (field: keyof ContactFormData, value: string) => void;
};

export default function UserAbout({ form, handleChange }: UserAboutProps) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Typography variant="h5" sx={titleSx} gutterBottom>
        À propos de vous :
      </Typography>

      <TextField
        label="Nom"
        value={form.name}
        onChange={(event) => {
          handleChange("name", event.target.value);
        }}
        required
        fullWidth
        sx={{ ...contentSx, mb: 3 }}
      />

      <TextField
        label="Email"
        type="email"
        value={form.email}
        onChange={(event) => {
          handleChange("email", event.target.value);
        }}
        required
        fullWidth
        sx={{ ...contentSx, mb: 3 }}
      />

      <TextField
        label="Telephone"
        type="tel"
        value={form.phone}
        onChange={(event) => {
          handleChange("phone", event.target.value);
        }}
        fullWidth
        sx={{ ...contentSx }}
      />
    </GlassySurface>
  );
}
