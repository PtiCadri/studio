"use client";

import { useMemo } from "react";

import type { ArtistAction } from "@/components/references/artists/types";
import type { ActiveIntegration } from "@/components/references/types";

import type { ArtistIntegrations, ArtistLinks } from "./types";

type UseArtistActionsParams = {
    links: ArtistLinks;
    integrations: ArtistIntegrations;
    setActiveIntegration: (value: Exclude<ActiveIntegration, null>) => void;
};

export function useArtistActions({
    links,
    integrations,
    setActiveIntegration,
}: UseArtistActionsParams): ArtistAction[] {
    return useMemo(() => {
        const nextActions: ArtistAction[] = [];

        if (integrations?.spotify_embed_url) {
            nextActions.push({
                key: "spotify",
                icon: "spotify",
                action: {
                    type: "callback",
                    onClick: () => setActiveIntegration("spotify"),
                },
            });
        }

        if (integrations?.deezer_embed_url) {
            nextActions.push({
                key: "deezer",
                icon: "deezer",
                action: {
                    type: "callback",
                    onClick: () => setActiveIntegration("deezer"),
                },
            });
        }

        if (integrations?.apple_music_embed_url) {
            nextActions.push({
                key: "appleMusic",
                icon: "appleMusic",
                action: {
                    type: "callback",
                    onClick: () => setActiveIntegration("appleMusic"),
                },
            });
        }

        if (links?.youtube_url) {
            nextActions.push({
                key: "youtube",
                icon: "youtube",
                action: {
                    type: "external_link",
                    href: links.youtube_url,
                },
            });
        }

        if (links?.soundcloud_url) {
            nextActions.push({
                key: "soundcloud",
                icon: "soundcloud",
                action: {
                    type: "external_link",
                    href: links.soundcloud_url,
                },
            });
        }

        if (links?.tiktok_url) {
            nextActions.push({
                key: "tiktok",
                icon: "tiktok",
                action: {
                    type: "external_link",
                    href: links.tiktok_url,
                },
            });
        }

        if (links?.instagram_url) {
            nextActions.push({
                key: "instagram",
                icon: "instagram",
                action: {
                    type: "external_link",
                    href: links.instagram_url,
                },
            });
        }

        return nextActions;
    }, [integrations, links, setActiveIntegration]);
}
