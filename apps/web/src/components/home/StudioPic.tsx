import Image from "next/image";
import { Box } from "@mui/material";

export default function StudioPic() {

    return (
        <Box sx={{ height: "100%", width: "100%", marginBottom: "50px" }}>
            <Image
                src="/studio.png"
                alt="Studio"
                width={1900}
                height={778}
                style={{ width: "100%", height: "auto" }}
            />
        </Box>
    );
}
