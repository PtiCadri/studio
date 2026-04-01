"use client";

import {
    ReadonlyURLSearchParams,
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

export type ServiceId =
    | "recording"
    | "mixing"
    | "mastering"
    | "live"
    | "single"
    | "project"
    | "album";

export type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    services: ServiceId[];
    message: string;
};

const validServices: ServiceId[] = [
    "recording",
    "mixing",
    "mastering",
    "live",
    "single",
    "project",
    "album",
];

const initialForm: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
};

function parseServicesFromSearchParams(
    searchParams: ReadonlyURLSearchParams
): ServiceId[] {
    const rawServices = searchParams.get("services");

    if (!rawServices) {
        return [];
    }

    return rawServices.split(",").filter((service): service is ServiceId => {
        return validServices.includes(service as ServiceId);
    });
}

function areServicesEqual(a: ServiceId[], b: ServiceId[]) {
    if (a.length !== b.length) {
        return false;
    }

    return a.every((service, index) => service === b[index]);
}

async function sendContactForm(form: ContactFormData) {
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

export function useContactForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [form, setForm] = useState<ContactFormData>({
        ...initialForm,
        services: parseServicesFromSearchParams(searchParams),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const urlServices = parseServicesFromSearchParams(searchParams);

        setForm((current) => {
            if (areServicesEqual(current.services, urlServices)) {
                return current;
            }

            return {
                ...current,
                services: urlServices,
            };
        });
    }, [searchParams]);

    const updateServicesInUrl = (services: ServiceId[]) => {
        const params = new URLSearchParams(searchParams.toString());

        if (services.length === 0) {
            params.delete("services");
        } else {
            params.set("services", services.join(","));
        }

        const query = params.toString();
        const nextUrl = query ? `${pathname}?${query}` : pathname;

        router.replace(nextUrl, { scroll: false });
    };

    const handleChange = (field: keyof ContactFormData, value: string) => {
        setForm((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const handleServiceToggle = (service: ServiceId) => {
        const isSelected = form.services.includes(service);

        const nextServices = isSelected
            ? form.services.filter((item) => item !== service)
            : [...form.services, service];

        setForm((current) => ({
            ...current,
            services: nextServices,
        }));

        updateServicesInUrl(nextServices);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (form.services.length === 0) {
            setErrorMessage(
                "Veuillez choisir au moins un service ou une formule."
            );
            return;
        }

        setIsSubmitting(true);

        try {
            await sendContactForm(form);

            setSuccessMessage("Votre message a bien été envoyé.");
            setForm(initialForm);
            router.replace(pathname, { scroll: false });
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
