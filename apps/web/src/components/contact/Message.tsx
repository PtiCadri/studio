import { ContactFormData } from "@/lib/contact/contact.types";
import { TextField, Typography } from "@mui/material";

interface MessageProps {
  form: ContactFormData;
  handleChange: (field: keyof ContactFormData, value: string) => void;
}

export default function Message({ form, handleChange }: MessageProps) {
  return (
    <>
      <Typography variant="h5" sx={{ pl: "5px", mt: 3, mb: 2 }}>
        Rédigez votre message :
      </Typography>
      <TextField
        label="Message"
        value={form.message}
        onChange={(event) => {
          handleChange("message", event.target.value);
        }}
        required
        fullWidth
        multiline
        minRows={6}
      />
    </>
  );
}
