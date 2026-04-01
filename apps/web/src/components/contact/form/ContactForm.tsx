"use client";

import { useContactForm } from "@/hooks/contact/useContactForm";
import { Alert, Box } from "@mui/material";
import Message from "./Message";
import SendButton from "./SendButton";
import Services from "./Services";
import { formSx } from "./styles";
import UserAbout from "./UserAbout";

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
    <Box component="form" onSubmit={handleSubmit} sx={formSx}>
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <UserAbout form={form} handleChange={handleChange} />

      <Services form={form} handleServiceToggle={handleServiceToggle} />

      <Message form={form} handleChange={handleChange} />

      <SendButton isSubmitting={isSubmitting} />
    </Box>
  );
}
