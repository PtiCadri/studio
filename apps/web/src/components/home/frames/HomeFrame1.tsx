import { Box } from "@mui/material";

export default function HomeFrame1() {

    return (
        <Box sx={{ height: "100%", display: "grid", placeItems: "center" }}>
            <Box
                component="img"
                src="/studio.png"
            />
        </Box>
    );
}
