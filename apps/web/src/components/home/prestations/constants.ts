import {
    liveDesc,
    masteringDesc,
    mixingDesc,
    recordingDesc,
} from "@/components/home/prestations/PrestationsDescriptions";
import type { Prestation } from "@/components/home/prestations/types";

const Prestations: Prestation[] = [
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
];

const PrestationsDescriptions = [
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

export { Prestations, PrestationsDescriptions };
