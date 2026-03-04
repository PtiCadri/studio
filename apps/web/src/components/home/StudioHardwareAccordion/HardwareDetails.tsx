import Image from "next/image";
import { Box, Typography } from "@mui/material";
import type { HardwareItem } from "./types";

type Props = Pick<HardwareItem, "imageSrc" | "imageAlt" | "description">;

export default function HardwareDetails(props: Props) {
  const { imageSrc, imageAlt, description } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Image src={imageSrc} alt={imageAlt} width={150} height={150} />
      <Typography variant="body1" color="text.secondary" sx={{ mr: 3 }}>
        {description}
      </Typography>
    </Box>
  );
}
