"use client";

import { Stack, Typography, FormControl } from "@mui/material";
import UserDataField from "./UserDataField";

export default function Form() {
    return (
        <FormControl>
            <Stack
                direction="column"
                alignItems="flex-start"
                sx={formSx}
            >
                <Typography variant="h5" gutterBottom>
                    À propos de vous :
                </Typography>
                <UserDataField
                    label="Nom"
                    type="text"
                    required
                    name="name"
                />

                <UserDataField
                    label="Email"
                    type="email"
                    required
                    name="email"
                />

                <UserDataField
                    label="Telephone"
                    type="tel"
                    name="tel"
                />

                <Typography variant="h5" gutterBottom>
                    Quel(s) service(s) vous intéresse ?
                </Typography>

                <Stack
                >

                </Stack>
            </Stack>
        </FormControl>
    );
}

const formSx = {
    width: "650px",
    ml: "425px",
};
