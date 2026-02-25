'use client';

import { Box, Stack } from '@mui/material';
import NhadesRecords from './NhadesRecords';
import NavbarButton from './NavbarButton';
import { NAVBAR_HEIGHT } from '@/constants/layout';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <Box sx={navSx}>
            <NhadesRecords isActive={pathname === "/"} />

            <Stack direction="row" sx={stackSx}>
                <NavbarButton
                    label="Prestations"
                    href="/prestations"
                    ariaLabel="Vers la page Prestations"
                    isActive={pathname === "/prestations"}
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
                sx={{ height: "120px" }}
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
    borderBottom: "1px solid",
    borderColor: "divider",
    bgcolor: "background.default",
};

const stackSx = {
    height: "80px",
    width: "100%",
    maxWidth: "700px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};
