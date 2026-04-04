import { CustomIcon } from "@/components/ui";
import { IconButton } from "@mui/material";

export default function LinkIcon({ icon }: { icon: string }) {
  return (
    <IconButton>
      <CustomIcon icon={icon} sx={iconSx} />
    </IconButton>
  );
}

const iconSx = {
  height: "25px",
  width: "25px",
  color: "text.secondary",

  "&:hover": {
    color: { lg: "primary.main" },
  },
};
