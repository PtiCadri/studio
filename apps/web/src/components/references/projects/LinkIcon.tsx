import { IconButton } from "@mui/material";

import { iconPaths } from "@/components/footer/socialLinks/constants";
import CustomIcon from "@/components/ui/CustomIcon";
import type { LinkIconAction } from "../types";
import type { IconKey } from "./types";

import { iconSx } from "./styles";

type LinkIconProps = {
  icon: IconKey;
  action: LinkIconAction;
};

export default function LinkIcon({ icon, action }: LinkIconProps) {
  function handleClick(): void {
    if (action.type === "external_link") {
      window.open(action.href, "_blank", "noopener,noreferrer");
      return;
    }

    action.onClick();
  }

  return (
    <IconButton onClick={handleClick}>
      <CustomIcon icon={iconPaths[icon]} sx={iconSx} />
    </IconButton>
  );
}
