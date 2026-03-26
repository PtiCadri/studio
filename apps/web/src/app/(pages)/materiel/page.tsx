import { Box, Typography } from "@mui/material";
import { hardwareObj } from "@/constants/matos/hardwareObj";
import HardwareCard from "@/components/matos/HardwareCard";

export default function Materiel() {
    const hardwareItems = Object.values(hardwareObj);

    return (
        <Box sx={containerSx}>
            <Box sx={listSx}>
                {hardwareItems.map((item, index) => (
                    <HardwareCard
                        key={item.title}
                        item={item}
                        reverse={index % 2 === 1}
                    />
                ))}
            </Box>
        </Box>
    );
}

const containerSx = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 3,
    py: 6,
};

const listSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
};
