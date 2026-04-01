"use client";

import { ContactForm, StudioInfos } from "@/components/contact/";
import { Divider } from "@/components/ui";
import { theme } from "@/theme/theme";
import { Box, useMediaQuery } from "@mui/material";

export default function ContactContent() {
  const isUp = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={wrapperSx}>
      <StudioInfos />
      {isUp && <Divider />}
      <ContactForm />
    </Box>
  );
}

const wrapperSx = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: { xs: "column-reverse", sm: "row" },
};
