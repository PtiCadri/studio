"use client";

import { Box, Typography } from "@mui/material";
import { useMemo, useState } from "react";

import { GlassySurface } from "@/components/ui";
import SafeImage from "@/components/ui/SafeImage";
import { useProject } from "@/hooks/references/useProject";
import { getImageUrl } from "@/utils/getImageUrl";

import LinkIcon from "./LinkIcon";
import AppleMusicIntegration from "./integrations/AppleMusic";
import DeezerIntegration from "./integrations/Deezer";
import SpotifyIntegration from "./integrations/Spotify";

type ProjectProps = {
  id: number;
  name: string;
  image_url: string | null;
};

type ActiveIntegration = "spotify" | "deezer" | "appleMusic" | null;

type IconKey = "spotify" | "deezer" | "appleMusic" | "soundcloud" | "youtube";

type ProjectAction = {
  key: string;
  icon: IconKey;
  action:
    | {
        type: "external_link";
        href: string;
      }
    | {
        type: "callback";
        onClick: () => void;
      };
};

export default function Project({ id, name, image_url }: ProjectProps) {
  const imageSrc = getImageUrl(image_url);
  const { links, integrations, isLoading, error } = useProject(id);

  const [activeIntegration, setActiveIntegration] =
    useState<ActiveIntegration>(null);

  const actions = useMemo<ProjectAction[]>(() => {
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
  }, [integrations, links]);

  function renderDefaultCard() {
    return (
      <>
        <Box sx={imageWrapperSx}>
          <SafeImage
            src={imageSrc}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box sx={nameLinksWrapperSx}>
          <Typography sx={projectNameSx}>{name}</Typography>
          <Box sx={iconsWrapperSx}>
            {actions.map((item) => (
              <LinkIcon key={item.key} icon={item.icon} action={item.action} />
            ))}
          </Box>
        </Box>
      </>
    );
  }

  function renderIntegrationCard() {
    if (activeIntegration === "spotify" && integrations?.spotify_embed_url) {
      return (
        <Box sx={integrationWrapperSx}>
          <Box sx={integrationHeaderSx}>
            <Typography sx={projectNameSx}>{name}</Typography>

            <Box
              component="button"
              onClick={() => setActiveIntegration(null)}
              sx={backButtonSx}
            >
              Retour
            </Box>
          </Box>

          <SpotifyIntegration embedUrl={integrations.spotify_embed_url} />
        </Box>
      );
    }

    if (activeIntegration === "deezer" && integrations?.deezer_embed_url) {
      return (
        <Box sx={integrationWrapperSx}>
          <Box sx={integrationHeaderSx}>
            <Typography sx={projectNameSx}>{name}</Typography>

            <Box
              component="button"
              onClick={() => setActiveIntegration(null)}
              sx={backButtonSx}
            >
              Retour
            </Box>
          </Box>

          <DeezerIntegration embedUrl={integrations.deezer_embed_url} />
        </Box>
      );
    }

    if (
      activeIntegration === "appleMusic" &&
      integrations?.apple_music_embed_url
    ) {
      return (
        <Box sx={integrationWrapperSx}>
          <Box sx={integrationHeaderSx}>
            <Typography sx={projectNameSx}>{name}</Typography>

            <Box
              component="button"
              onClick={() => setActiveIntegration(null)}
              sx={backButtonSx}
            >
              Retour
            </Box>
          </Box>

          <AppleMusicIntegration
            embedUrl={integrations.apple_music_embed_url}
          />
        </Box>
      );
    }

    return renderDefaultCard();
  }

  function renderContent() {
    if (isLoading) {
      return <Typography>Chargement...</Typography>;
    }

    if (error) {
      return <Typography>{error}</Typography>;
    }

    if (activeIntegration !== null) {
      return renderIntegrationCard();
    }

    return renderDefaultCard();
  }

  return <GlassySurface sx={surfaceSx}>{renderContent()}</GlassySurface>;
}

const surfaceSx = {
  width: "100%",
  height: "fit-content",
  p: 3,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const iconsWrapperSx = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  gap: 1,
  mt: 4,
  flexWrap: "wrap",
};

const projectNameSx = {
  fontSize: "1.4rem",
  fontWeight: "bold",
};

const nameLinksWrapperSx = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  ml: 2,
};

const imageWrapperSx = {
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  height: "180px",
  aspectRatio: "1 / 1",
};

const integrationWrapperSx = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const integrationHeaderSx = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 2,
};

const backButtonSx = {
  background: "transparent",
  border: "1px solid",
  borderColor: "divider",
  color: "text.primary",
  borderRadius: "999px",
  px: 2,
  py: 0.5,
  cursor: "pointer",
};
