"use client";

import { useArtist } from "./useArtist";
import { useArtistIntegrations } from "./useArtistIntegrations";
import { useArtistLinks } from "./useArtistLinks";

export function useArtistDetails(artistId: number | null) {
    const artistState = useArtist(artistId);
    const integrationsState = useArtistIntegrations(artistId);
    const linksState = useArtistLinks(artistId);

    return {
        artist: artistState.artist,
        links: linksState.links,
        integrations: integrationsState.integrations,
        isLoading:
            artistState.isLoading ||
            linksState.isLoading ||
            integrationsState.isLoading,
        error: artistState.error || linksState.error || integrationsState.error,
    };
}
