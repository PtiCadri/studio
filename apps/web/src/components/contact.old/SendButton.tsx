import { Button } from "@mui/material";

export default function SendButton({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  return (
    <Button type="submit" variant="contained" disabled={isSubmitting}>
      {isSubmitting ? "Envoi..." : "Envoyer"}
    </Button>
  );
}
