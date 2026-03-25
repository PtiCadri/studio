import GlassySurface from "@/components/ui/GlassySurface";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface PrestationCardProps {
    title: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
};

export default function PrestationCard({
    title,
    icon,
    isActive,
    onClick,
}: PrestationCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const isHighlighted = isActive || isHovered;

    return (
        <GlassySurface
            sx={surfaceSx(isHighlighted)}
            animatedBorder={isHighlighted}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <Box
                component="img"
                src={`/icons/${icon}.svg`}
                sx={{ width: "40px", height: "40px" }}
            />
            <Typography variant="h6">
                {title}
            </Typography>
        </GlassySurface>
    );
}

const surfaceSx = (isHighlighted: boolean) => ({
    height: "150px",
    width: "250px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    color: isHighlighted ? "text.primary" : "text.secondary",
    cursor: "pointer",
    userSelect: 'none'
});
