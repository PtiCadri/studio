export type ServiceId = "recording" | "mixing" | "mastering" | "live";

export type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    services: ServiceId[];
    message: string;
};
