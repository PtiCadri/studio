import React from 'react';
import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';

import Navbar from '@/components/navbar/Navbar';
import Starfield from '@/components/background/Starfield';
import { Box } from '@mui/material';
import { NAVBAR_HEIGHT } from '@/constants/layout';
import { ibmPlexSans } from "@/theme/fonts";

export const metadata: Metadata = {
    title: {
        default: 'Nhadès Records',
        template: '%s | Nhadès Records',
    },
    description: 'Nhadès Records, studio de musique indépendant situé à 5 minutes de Rouen.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
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
                        {children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
