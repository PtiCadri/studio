const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export function getImageUrl(path: string | null): string | null {
    if (!path) return null;

    return `${API_BASE_URL}${path}`;
}
