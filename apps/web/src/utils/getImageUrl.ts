import { API_BASE_URL } from "./constants";

export function getImageUrl(path: string | null): string | null {
    if (!path) return null;

    return `${API_BASE_URL}${path}`;
}
