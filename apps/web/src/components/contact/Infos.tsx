import StudioLocation from "@/components/contact/StudioLocation";
import { Box, Typography } from "@mui/material";

export default function Infos() {
  return (
    <Box sx={boxSx}>
      <Typography variant="body1" sx={{ pl: "10px" }} gutterBottom>
        <strong>Studio Nha Dès Records</strong>
      </Typography>

      <Typography variant="body1" sx={{ pl: "10px" }} gutterBottom>
        nhadesrecords@outlook.fr
      </Typography>

      <Typography variant="body1" sx={{ pl: "10px" }} gutterBottom>
        06.50.46.24.88
      </Typography>

      <Typography variant="body1" sx={{ pl: "10px" }} gutterBottom>
        47 Rue des Canadiens
        <br />
        76420 - Bihorel
      </Typography>

      <StudioLocation />
    </Box>
  );
}

const boxSx = {
  position: "absolute",
  top: "320px",
  left: "10px",
  color: "text.secondary",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  px: 2,
};
