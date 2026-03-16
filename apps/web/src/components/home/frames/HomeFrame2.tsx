import PresentationStudio from "@/components/home/PresentationStudio";
import GlassySurface from "@/components/ui/GlassySurface";
import Box from "@mui/material/Box";

export default function HomeFrame2() {

    return(
        <Box sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            height: "100%",
        }}>
            <GlassySurface
                animatedBorder={false}
                sx={{
                    maxWidth: "lg",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: 0
                }}
            >
                <PresentationStudio />
            </GlassySurface>
        </Box>
    )
}
