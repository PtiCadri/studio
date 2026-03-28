import {
    desIconSx,
    nhaIconSx,
    recordsIconSx,
} from "@/components/navbar/studioName/styles";

import { type StudioNameIcon } from "@/components/navbar/studioName/types";

const nhaDesIcons: StudioNameIcon[] = [
    {
        key: "nha",
        transformOrigin: "right",
        icon: "nha.svg",
        style: nhaIconSx,
    },
    {
        key: "des",
        transformOrigin: "left",
        icon: "des.svg",
        style: desIconSx,
        margin: { ml: "10px" },
    },
];

const recordsIcon: StudioNameIcon = {
    key: "records",
    transformOrigin: "center",
    icon: "records.svg",
    style: recordsIconSx,
};

export { nhaDesIcons, recordsIcon };
