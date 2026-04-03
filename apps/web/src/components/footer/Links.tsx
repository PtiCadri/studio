import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { buttonSx, stackSx } from "./styles";

export default function Links() {
  return (
    <Stack sx={stackSx}>
      <Button
        component={Link}
        href={"/contact"}
        aria-label="Contactez-nous"
        variant="text"
        disableRipple
        disableElevation
        sx={buttonSx}
      >
        Contact
      </Button>
      <Button
        component={Link}
        href={"/mentions-legales"}
        aria-label="Mentions légales"
        variant="text"
        disableRipple
        disableElevation
        sx={buttonSx}
      >
        Mentions légales
      </Button>
      <Button
        component={Link}
        href={"/conditions-generales-de-vente"}
        aria-label="Conditions générales de vente"
        variant="text"
        disableRipple
        disableElevation
        sx={buttonSx}
      >
        Conditions générales de vente
      </Button>
      <Typography variant="body2" gutterBottom>
        06.50.46.24.88
      </Typography>
      <Button
        component={Link}
        href={"/plan-du-site"}
        aria-label="Plan du site"
        variant="text"
        disableRipple
        disableElevation
        sx={buttonSx}
      >
        Plan du site
      </Button>
      <Typography variant="body2" gutterBottom>
        © 2022 Nha Dès Records
      </Typography>
    </Stack>
  );
}
