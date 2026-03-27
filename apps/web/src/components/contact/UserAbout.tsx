import { ContactFormData } from "@/lib/contact/contact.types";
import { TextField, Typography } from "@mui/material";

interface UserAboutProps {
  form: ContactFormData;
  handleChange: (field: keyof ContactFormData, value: string) => void;
}

export default function UserAbout({ form, handleChange }: UserAboutProps) {
  return (
    <>
      <Typography variant="h5" sx={{ pl: "5px" }}>
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
      />

      <TextField
        label="Telephone"
        type="tel"
        value={form.phone}
        onChange={(event) => {
          handleChange("phone", event.target.value);
        }}
        fullWidth
      />
    </>
  );
}
