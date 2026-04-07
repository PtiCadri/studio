"use client";

import { useMemo } from "react";

import type {
    ActiveIntegration,
    ProjectAction,
} from "@/components/references/projects/types";

type Links = {
    soundcloud_url: string | null;
    youtube_url: string | null;
} | null;

type Integrations = {
    spotify_embed_url: string | null;
    deezer_embed_url: string | null;
    apple_music_embed_url: string | null;
} | null;

type UseProjectActionsParams = {
    links: Links;
    integrations: Integrations;
    setActiveIntegration: (value: Exclude<ActiveIntegration, null>) => void;
};

export function useProjectActions({
    links,
    integrations,
    setActiveIntegration,
}: UseProjectActionsParams): ProjectAction[] {
    return useMemo(() => {
        const nextActions: ProjectAction[] = [];

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

        return nextActions;
    }, [integrations, links, setActiveIntegration]);
}
