import PresentationStudio from "@/components/home/PresentationStudio";
import GlassySurface from "@/components/ui/GlassySurface";
import Box from "@mui/material/Box";

export default function HomeFrame2() {

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
            <GlassySurface sx={{ maxWidth: "lg" }}>
                <PresentationStudio />
            </GlassySurface>
        </Box>
    )
}
