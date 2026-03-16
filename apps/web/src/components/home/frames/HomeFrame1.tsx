import { Box } from "@mui/material";
import Image from "next/image";

export default function HomeFrame1() {

    return (
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <Image src="/studio.png" alt="studio" fill style={{ objectFit: "cover" }} />
        </Box>
    );
}
