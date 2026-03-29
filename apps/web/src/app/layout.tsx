import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import React from "react";

import Starfield from "@/components/background/Starfield";
import Footer from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/constants/layout";
import { ibmPlexSans } from "@/theme/fonts";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: {
    default: "Nhadès Records",
    template: "%s | Nhadès Records",
  },
  description:
    "Nhadès Records, studio de musique indépendant situé à 5 minutes de Rouen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={ibmPlexSans.variable}>
      <body>
        <Starfield />
        <ThemeRegistry>
          <Navbar />

          <Box
            sx={{
              pt: `${NAVBAR_HEIGHT + 20}px`,
              overflowX: "hidden",
              px: { xs: "20px", lg: "0px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={containerSx}>{children}</Box>
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

const containerSx = {
  width: "100%",
  maxWidth: "1150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
};
