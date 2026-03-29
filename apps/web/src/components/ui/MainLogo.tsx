import { Box, SxProps, Theme } from "@mui/material";

export default function MainLogo() {
  return <Box component="img" src="/logo2.svg" alt="Logo" sx={logoSx} />;
}

const logoSx: SxProps<Theme> = {
  width: "auto",
  height: { xs: "180px", lg: "280px" },
  mb: "50px",
  userSelect: "none",
};
