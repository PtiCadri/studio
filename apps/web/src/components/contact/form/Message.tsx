import { GlassySurface } from "@/components/ui";
import { ContactFormData } from "@/hooks/contact/useContactForm";
import { TextField, Typography } from "@mui/material";
import { surfaceSx, titleSx } from "./styles";

type MessageProps = {
  form: ContactFormData;
  handleChange: (field: keyof ContactFormData, value: string) => void;
};

export default function Message({ form, handleChange }: MessageProps) {
  return (
    <GlassySurface sx={surfaceSx}>
      <Typography variant="h5" sx={titleSx}>
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
    </GlassySurface>
  );
}
