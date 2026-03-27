"use client";

import { ContactFormData, ServiceId } from "@/lib/contact/contact.types";
import { sendContactForm } from "@/lib/contact/contactApi";
import { useState } from "react";

const initialForm: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
};

export function useContactForm() {
    const [form, setForm] = useState<ContactFormData>(initialForm);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleServiceToggle = (service: ServiceId) => {
        setForm((current) => {
            const isSelected = current.services.includes(service);

            if (isSelected) {
                return {
                    ...current,
                    services: current.services.filter(
                        (item) => item !== service
                    ),
                };
            }

            return {
                ...current,
                services: [...current.services, service],
            };
        });
    };

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (form.services.length === 0) {
            setErrorMessage("Veuillez choisir au moins un service.");
            return;
        }

        setIsSubmitting(true);

        try {
            await sendContactForm(form);

            setSuccessMessage("Votre message a bien été envoyé.");
            setForm(initialForm);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Une erreur est survenue.";

            setErrorMessage(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        form,
        isSubmitting,
        successMessage,
        errorMessage,
        handleChange,
        handleServiceToggle,
        handleSubmit,
    };
}
