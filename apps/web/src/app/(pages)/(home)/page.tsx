'use client';

import Link from "next/link";
import { Box } from "@mui/material";
import { montserrat } from "@/theme/fonts";

export default function Home() {
  return (
    <Box sx={boxSx}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Box
          className={montserrat.variable}
          component="img"
          src="nhades.svg"
          alt="Studio Nhadès Records"
          sx={{
            height: 45,
            pl: 15,
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            "&:hover": {
              opacity: 0.7,
            },
          }}
        />
      </Link>
    </Box>
  );
}

const boxSx = {
  width: '100%',
  height: '80px',

  display: 'flex',
  alignItems: 'center',

  borderBottom: '1px solid',
};
