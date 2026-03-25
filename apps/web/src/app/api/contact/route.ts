import { Resend } from "resend";

type ServiceId =
    | "recording"
    | "mixing"
    | "mastering"
    | "live";

type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    services: ServiceId[];
    message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<ServiceId, string> = {
    recording: "Enregistrement",
    mixing: "Mix",
    mastering: "Mastering",
    live: "Accompagnement live",
};

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailHtml(payload: ContactPayload): string {
    const phoneLine = payload.phone?.trim()
        ? payload.phone
        : "Not provided";

    const servicesLine = payload.services
        .map((service) => serviceLabels[service])
        .join(", ");    

    return `
        <div style="font-family: Arial, sans-serif;">
            <h2>New contact form submission</h2>
            <p><strong>Nom:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Telephone:</strong> ${phoneLine}</p>
            <p><strong>Service(s):</strong> ${servicesLine}</p>
            <h3>Message</h3>
            <p style="white-space: pre-wrap;">${payload.message}</p>
        </div>
    `;
}

export async function POST(request: Request) {
    try {
        console.log("API /contact called");

        const body = (await request.json()) as ContactPayload;
        console.log("Body received:", body);

        const name = body.name?.trim() || "";
        const email = body.email?.trim() || "";
        const phone = body.phone?.trim() || "";
        const services = Array.isArray(body.services)
            ? body.services
            : [];
        const message = body.message?.trim() || "";

        console.log("Env check:", {
            hasApiKey: !!process.env.RESEND_API_KEY,
            to: process.env.CONTACT_TO_EMAIL,
            from: process.env.CONTACT_FROM_EMAIL,
        });

        if (!name || !email || services.length === 0 || !message) {
            return Response.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return Response.json(
                { error: "Invalid email address." },
                { status: 400 }
            );
        }

        const validServices: ServiceId[] = [
            "recording",
            "mixing",
            "mastering",
            "live",
        ];

        const hasInvalidService = services.some((service) => {
            return !validServices.includes(service);
        });

        if (hasInvalidService) {
            return Response.json(
                { error: "Invalid service selection." },
                { status: 400 }
            );
        }

        const to = process.env.CONTACT_TO_EMAIL;
        const from = process.env.CONTACT_FROM_EMAIL;

        if (!to || !from || !process.env.RESEND_API_KEY) {
            console.error("Missing environment variables");
            return Response.json(
                { error: "Missing email environment variables." },
                { status: 500 }
            );
        }

        const result = await resend.emails.send({
            from,
            to,
            replyTo: email,
            subject: `New contact form: ${name}`,
            html: buildEmailHtml({
                name,
                email,
                phone,
                services,
                message,
            }),
        });

        console.log("Resend result:", result);

        if (result.error) {
            console.error("Resend returned an error:", result.error);

            return Response.json(
                { error: "Email could not be sent." },
                { status: 500 }
            );
        }

        return Response.json({ ok: true });
    } catch (error) {
        console.error("POST /api/contact crashed:", error);

        return Response.json(
            {
                error: error instanceof Error
                    ? error.message
                    : "Unknown server error",
            },
            { status: 500 }
        );
    }
}
