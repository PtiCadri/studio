export type LinkIconAction =
    | {
          type: "external_link";
          href: string;
      }
    | {
          type: "callback";
          onClick: () => void;
      };

export type ActiveIntegration = "spotify" | "deezer" | "appleMusic" | null;
