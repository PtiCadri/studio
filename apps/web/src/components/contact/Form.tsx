"use client";

import {
    Alert,
    Box,
    Stack,
} from "@mui/material";
import { useContactForm } from "@/hooks/contact/useContactForm";
import UserAbout from "./UserAbout";
import Services from "./Services";
import Message from "./Message";
import SendButton from "./SendButton";

export default function ContactForm() {
    const {
        form,
        isSubmitting,
        successMessage,
        errorMessage,
        handleChange,
        handleServiceToggle,
        handleSubmit,
    } = useContactForm();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={formSx}
        >
            <Stack spacing={2.5}>
                {successMessage && (
                    <Alert severity="success">
                        {successMessage}
                    </Alert>
                )}

                {errorMessage && (
                    <Alert severity="error">
                        {errorMessage}
                    </Alert>
                )}

                <UserAbout
                    form={form}
                    handleChange={handleChange}
                />
                
                <Services
                    form={form}
                    handleServiceToggle={handleServiceToggle}
                />

                <Message
                    form={form}
                    handleChange={handleChange}
                />

                <SendButton isSubmitting={isSubmitting} />
            </Stack>
        </Box>
    );
}

const formSx = {
    width: "100%",
    maxWidth: "850px",
    ml: "auto",
    px: 3,
    py: "5px",
    mb: 4,
    borderLeft: "1px solid",
    borderColor: "divider",
};
