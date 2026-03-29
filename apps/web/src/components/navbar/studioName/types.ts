import { type Theme } from "@mui/material";
import { type SystemStyleObject } from "@mui/system";

type TransformOrigin = "left" | "center" | "right";

type StudioNameIcon = {
    key: string;
    transformOrigin: TransformOrigin;
    icon: string;
    style: SystemStyleObject<Theme>;
    margin?: SystemStyleObject<Theme>;
};

type StudioNamePartProps = {
    icon: StudioNameIcon;
};

export type { StudioNameIcon, StudioNamePartProps };
