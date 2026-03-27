import { ContactFormData } from "./contact.types";

export async function sendContactForm(form: ContactFormData) {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Echec de l'envoi.");
    }

    return data;
}
