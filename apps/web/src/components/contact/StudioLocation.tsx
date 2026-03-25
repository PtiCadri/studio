import { Box } from "@mui/material";

const address =
    "47 Rue des Canadiens, 76420 Bihorel";

export default function StudioLocation() {
    const apiKey =
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const src =
        "https://www.google.com/maps/embed/v1/place" +
        `?key=${apiKey}` +
        `&q=${encodeURIComponent(address)}`;

    return (
        <Box sx={wrapperSx}>
            <iframe
                title="Studio location"
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
            />
        </Box>
    );
}

const wrapperSx = {
    position: "absolute",
    top: "500px",
    width: "250px",
    height: 450,
    borderRadius: "4px",
    overflow: "hidden",
};
