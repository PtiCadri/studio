import Image from "next/image";
import { Box, Typography } from "@mui/material";
import GlassySurface from "@/components/ui/GlassySurface";

type HardwareItem = {
    imageSrc: string;
    title: string;
    eyebrow: string;
    desc: React.ReactNode;
    height: number;
    width: number;
};

type Props = {
    item: HardwareItem;
    reverse?: boolean;
};

export default function HardwareCard({
    item,
    reverse = false,
}: Props) {

    return (
        <GlassySurface sx={surfaceSx(reverse)}>
            <Box sx={imageWrapperSx}>
                <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    style={imageSx}
                />
            </Box>

            <Box sx={textAreaSx}>
                <Box sx={textBoxSx}>
                    <Typography sx={eyebrowSx}>
                        {item.eyebrow}
                    </Typography>

                    <Typography sx={titleSx}>
                        {item.title}
                    </Typography>

                    <Box sx={dividerSx} />

                    <Typography sx={descSx}>
                        {item.desc}
                    </Typography>
                </Box>
            </Box>
        </GlassySurface>
    );
}

const surfaceSx = (reverse: boolean) => ({
    width: "100%",
    maxWidth: "1150px",
    display: "flex",
    flexDirection: {
        xs: "column",
        md: reverse ? "row-reverse" : "row",
    },
    alignItems: "stretch",
    gap: 3,
    p: 3,
});

const imageWrapperSx = {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const imageSx = {
    width: "auto",
    height: "280px",
    borderRadius: "8px",
    display: "block",
};

const textAreaSx = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    minWidth: 0,
};

const textBoxSx = {
    width: "100%",
    maxWidth: "68ch",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
};

const eyebrowSx = {
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "text.secondary",
    opacity: 0.8,
};

const titleSx = {
    fontSize: "1.8rem",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "text.primary",
};

const dividerSx = {
    width: "56px",
    height: "2px",
    borderRadius: "999px",
    backgroundColor: "rgba(255,255,255,0.18)",
    my: 0.5,
};

const descSx = {
    fontSize: "1.02rem",
    lineHeight: 1.8,
    color: "text.secondary",
};
