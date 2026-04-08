import type {
    Project,
    ProjectDetail,
    ProjectIntegrations,
    ProjectLinks,
} from "./types";

import { fetchJson } from "@/utils/fetchJson";

// PROJECTS
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

// ARTISTS
