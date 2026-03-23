export type PrestationId =
    | "recording"
    | "mixing"
    | "mastering"
    | "live";

export const Prestations = [
    {
        id: "recording",
        title: "Enregistrement",
        icon: "enregistrement",
    },
    {
        id: "mixing",
        title: "Mixage",
        icon: "mixage",
    },
    {
        id: "mastering",
        title: "Mastering",
        icon: "mastering",
    },
    {
        id: "live",
        title: "Accompagnement Live",
        icon: "live",
    },
] as const;

import {
    recordingDesc,
    mixingDesc,
    masteringDesc,
    liveDesc
} from "@/constants/prestations/PrestationsDescriptions";

export const PrestationsDescriptions = [
    {
        id: "recording",
        desc: recordingDesc,
    },
    {
        id: "mixing",
        desc: mixingDesc,
    },
    {
        id: "mastering",
        desc: masteringDesc,
    },
    {
        id: "live",
        desc: liveDesc,
    },
];
