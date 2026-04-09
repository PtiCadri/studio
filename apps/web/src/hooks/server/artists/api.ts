import type {
    Artist,
    ArtistDetail,
    ArtistIntegrations,
    ArtistLinks,
} from "./types";

import { fetchJson } from "@/utils/fetchJson";

export function getArtists(): Promise<Artist[]> {
    return fetchJson<Artist[]>("/artists/");
}

export function getArtistById(id: number): Promise<ArtistDetail> {
    return fetchJson<ArtistDetail>(`/artists/${id}`);
}

export function getArtistLinks(id: number): Promise<ArtistLinks> {
    return fetchJson<ArtistLinks>(`/artists/${id}/links`);
}

export function getArtistIntegrations(id: number): Promise<ArtistIntegrations> {
    return fetchJson<ArtistIntegrations>(`/artists/${id}/integrations`);
}
