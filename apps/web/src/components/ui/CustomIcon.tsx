import { SvgIcon, SvgIconProps } from "@mui/material";

type IconProps = SvgIconProps & {
    icon: string;
};

export default function CustomIcon({
    icon,
    ...props
}: IconProps) {
    return (
        <SvgIcon {...props}>
            <path d={icon}/>
        </SvgIcon>
    );
}
