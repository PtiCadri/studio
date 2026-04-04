import { IconButton } from "@mui/material";

import { iconPaths } from "@/components/footer/socialLinks/constants";
import CustomIcon from "@/components/ui/CustomIcon";

type IconKey = "spotify" | "deezer" | "appleMusic" | "soundcloud" | "youtube";

type LinkIconAction =
  | {
      type: "external_link";
      href: string;
    }
  | {
      type: "callback";
      onClick: () => void;
    };

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

const iconSx = {
  height: "25px",
  width: "25px",
  color: "text.secondary",

  "&:hover": {
    color: { lg: "primary.main" },
  },
};
