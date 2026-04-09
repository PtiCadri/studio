export type IconKey =
    | "spotify"
    | "appleMusic"
    | "deezer"
    | "youtube"
    | "tiktok"
    | "soundcloud"
    | "instagram";

export type ArtistAction = {
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
