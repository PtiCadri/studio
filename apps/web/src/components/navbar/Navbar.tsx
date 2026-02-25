'use client';

import { Box, Stack } from '@mui/material';
import NhadesRecords from './NhadesRecords';
import NavbarButton from './NavbarButton';

export default function Navbar() {

    return (
        <Box sx={navSx}>
            <NhadesRecords />

            <Stack direction="row" sx={stackSx}>
                <NavbarButton
                    label="Prestations"
                    href="/prestations"
                    ariaLabel="Prestations"
                />
                <NavbarButton
                    label="Références"
                    href='/references'
                    ariaLabel="Références"
                />
                <NavbarButton
                    label="Shop"
                    href='/shop'
                    ariaLabel="Shop"
                />
                <NavbarButton
                    label="Contact"
                    href='/contact'
                    ariaLabel="Contact"
                />
            </Stack>

            <Box
                component="img"
                src="logo.svg"
                alt="Logo du studio"
                sx={{ height: "120px" }}
            />
        </Box>
    );
}

const navSx = {
    width: '100%',
    height: '80px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottom: '1px solid',
};

const stackSx = {
    height: "80px",
    width: "100%",
    maxWidth: "700px",

    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};
