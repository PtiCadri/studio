import { Stack, IconButton } from "@mui/material";
import CustomIcon from "@/components/CustomIcon";
import { customIcons } from "@/constants/iconPaths";

export default function SocialIcons() {
    return (
        <Stack direction="row" spacing={0} marginTop={3}>
            {Object.entries(customIcons).map(([key, value]) => (
                <IconButton
                    component="a"
                    href={value.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                >
                    <CustomIcon
                        icon={value.path}
                        sx={iconSx}
                    />
                </IconButton>
            ))}
        </Stack>
    );
}

const iconSx = {
    height: "25px",
    width: "25px",
    color: "text.secondary",

    "&:hover": {
        color: "primary.main",
    },
};
