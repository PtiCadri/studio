import { type SxProps, type Theme } from "@mui/material";

type StudioNameIcon = {
    key: string;
    transformOrigin: string;
    icon: string;
    style: SxProps<Theme>;
    margin?: SxProps<Theme>;
};

type StudioNamePartProps = {
    icon: StudioNameIcon;
};

export type { StudioNameIcon, StudioNamePartProps };
