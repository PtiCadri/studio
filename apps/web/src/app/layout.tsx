import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import React from "react";

import Starfield from "@/components/background/Starfield";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
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
              height: "100vh",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <Box sx={containerSx}>{children}</Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

const containerSx = {
  height: "auto",
  minHeight: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
