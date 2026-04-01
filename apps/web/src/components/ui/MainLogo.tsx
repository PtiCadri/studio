import { Box, SxProps, Theme } from "@mui/material";

export default function MainLogo({ marginBottom }: { marginBottom?: number }) {
  return (
    <Box
      component="img"
      src="/logo2.svg"
      alt="Logo"
      sx={logoSx(marginBottom)}
    />
  );
}

const logoSx = (marginBottom?: number): SxProps<Theme> => ({
  width: "auto",
  minHeight: { xs: "180px", lg: "280px" },
  mb: marginBottom ?? "0px",
  userSelect: "none",
});
