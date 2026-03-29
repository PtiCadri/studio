import CustomIcon from "@/components/ui/CustomIcon";
import { customIcons } from "@/constants/iconPaths";
import { IconButton, Stack } from "@mui/material";
import { iconSx } from "./styles";

export default function SocialIcons() {
  return (
    <Stack direction="row" spacing={0} marginTop={3}>
      {Object.entries(customIcons).map(([key, value]) => (
        <IconButton
          key={key}
          component="a"
          href={value.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={key}
        >
          <CustomIcon icon={value.path} sx={iconSx} />
        </IconButton>
      ))}
    </Stack>
  );
}
