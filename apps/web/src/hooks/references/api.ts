import type {
    Project,
    ProjectDetail,
    ProjectIntegrations,
    ProjectLinks,
} from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

async function fetchJson<T>(path: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

export function getProjects(): Promise<Project[]> {
    return fetchJson<Project[]>("/projects/");
}

export function getProjectById(id: number): Promise<ProjectDetail> {
    return fetchJson<ProjectDetail>(`/projects/${id}`);
}

export function getProjectLinks(id: number): Promise<ProjectLinks> {
    return fetchJson<ProjectLinks>(`/projects/${id}/links`);
}

export function getProjectIntegrations(
    id: number
): Promise<ProjectIntegrations> {
    return fetchJson<ProjectIntegrations>(`/projects/${id}/integrations`);
}
