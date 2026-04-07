type IconKey = "spotify" | "deezer" | "appleMusic" | "soundcloud" | "youtube";

type LinkIconAction =
    | {
          type: "external_link";
          href: string;
      }
    | {
          type: "callback";
          onClick: () => void;
      };

type ActiveIntegration = "spotify" | "deezer" | "appleMusic" | null;

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

export type { ActiveIntegration, IconKey, LinkIconAction, ProjectAction };
