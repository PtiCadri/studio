'use client';

import { Box, Stack } from '@mui/material';
import NhaDesRecords from './NhadesRecords';
import NavbarButton from './NavbarButton';
import { NAVBAR_HEIGHT } from '@/constants/layout';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <Box sx={navSx}>
            <NhaDesRecords isActive={pathname === "/"} />

            <Stack direction="row" sx={stackSx}>
                <NavbarButton
                    label="Matériel"
                    href="/materiel"
                    ariaLabel="Vers la page Matériel"
                    isActive={pathname === "/materiel"}
                />
                <NavbarButton
                    label="Références"
                    href='/references'
                    ariaLabel="Vers la page Références"
                    isActive={pathname === "/references"}
                />
                <NavbarButton
                    label="Shop"
                    href='/shop'
                    ariaLabel="Vers la page Shop"
                    isActive={pathname === "/shop"}
                />
                <NavbarButton
                    label="Contact"
                    href='/contact'
                    ariaLabel="Vers la page Contact"
                    isActive={pathname === "/contact"}
                />
            </Stack>

            <Box
                component="img"
                src="/logo.svg"
                alt="Logo du studio"
                sx={{ height: "70px", mr: "15px", zIndex: 1 }}
            />
        </Box>
    );
}

const navSx = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: NAVBAR_HEIGHT,
    zIndex: (theme: any) => theme.zIndex.appBar,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 2,
    backgroundColor: `rgba(255, 255, 255, 0.05)`,
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(5px) saturate(150%)",
    WebkitBackdropFilter: "blur(5px) saturate(150%)",
        
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "1px",
        pointerEvents: "none",

        background:
            "linear-gradient(90deg, " +
            "#141414 0%, " +
            "#303030 15%, " +
            "#888888 35%, " +
            "#ffffff 50%, " +
            "#888888 65%, " +
            "#303030 85%, " +
            "#141414 100%)",

        backgroundSize: "300% 100%",
        animation: "navBorderGlow 6s linear infinite",
        opacity: 0.9,
    },

    "@keyframes navBorderGlow": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};

const stackSx = {
    height: "80px",
    width: "100%",
    maxWidth: "700px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};
