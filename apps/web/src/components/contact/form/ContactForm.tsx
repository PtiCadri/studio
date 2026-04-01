"use client";

import { useContactForm } from "@/hooks/contact/useContactForm";
import { Alert, Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Message from "./Message";
import Prestations from "./Prestations";
import SendButton from "./SendButton";
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

  useEffect(() => {
    if (successMessage || errorMessage) {
      alertRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [successMessage, errorMessage]);

  const alertRef = useRef<HTMLDivElement>(null);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={formSx}>
      <Box ref={alertRef} sx={{ scrollMarginTop: `96px` }}>
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
      </Box>

      <UserAbout form={form} handleChange={handleChange} />

      <Prestations form={form} handleServiceToggle={handleServiceToggle} />

      <Message form={form} handleChange={handleChange} />

      <SendButton isSubmitting={isSubmitting} />
    </Box>
  );
}
