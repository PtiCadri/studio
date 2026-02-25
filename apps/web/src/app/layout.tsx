import React from 'react';
import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';

import Navbar from '@/components/navbar/Navbar';
import { Box } from '@mui/material';
import { NAVBAR_HEIGHT } from '@/constants/layout';
import { ibmPlexSans } from "@/theme/fonts";

export const metadata: Metadata = {
    title: 'Nhadès Records',
    description: 'Site officiel de Nhadès Records, studio de musique indépendant.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" className={ibmPlexSans.variable}>
            <body>
                <ThemeRegistry>
                    <Navbar />

                    <Box
                        sx={{
                            pt: `${NAVBAR_HEIGHT}px`,
                            height: "100vh",
                            overflowY: "auto",
                            overflowX: "hidden",
                        }}
                    >
                        {children}
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
