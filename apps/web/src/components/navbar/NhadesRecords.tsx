import Link from 'next/link';
import { Box } from '@mui/material';

export default function NhadesRecords() {

    return (
        <Link href="/" style={{ textDecoration: "none" }}>
            <Box
                component="img"
                src="nhades.svg"
                alt="Studio Nhadès Records"
                sx={imgSx}
            />
        </Link>
    );
}

const imgSx = {
    height: "80px",
    mx: "15px",
    p: "20px",
    cursor: "pointer",
    transition: "opacity 0.2s ease",
    "&:hover": {
        opacity: 0.7,
        transform: "scale(1.05)",
        transition: "transform 0.2s ease",
    },
};
