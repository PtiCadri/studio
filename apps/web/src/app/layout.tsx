import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import Navbar from '@/components/navbar/Navbar';
import { ibmPlexSans } from "@/theme/fonts";
import React from 'react';

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
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
