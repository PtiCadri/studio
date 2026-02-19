import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
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
        <html lang="fr">
            <body>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
