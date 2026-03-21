import GlassySurface from "@/components/ui/GlassySurface";
import { Typography } from "@mui/material";
import { Enceintes, CarteSon, Preamp, Micros } from "@/components/home/materiel";

export default function Materiel() {
    return (
        <GlassySurface sx={{ width: "100%", maxWidth: 'xl', pt: 2, mb: "50px"}}>
            <Typography
                variant="h1"
                sx={{
                    mb: 5,
                    fontWeight: 500,
                    borderLeft: "6px solid",
                    borderColor: "primary.main",
                    pl: 2
                }}
            >
                Le matériel
            </Typography>
            <Enceintes />
            <CarteSon/>
            <Preamp/>
            <Micros/>
        </GlassySurface>
    );
}
