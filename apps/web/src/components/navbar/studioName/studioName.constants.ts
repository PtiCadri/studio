import { desIconSx, nhaIconSx, recordsIconSx } from "./studioName.styles";
import { type StudioNameIcon } from "./studioName.types";

const nhaDesIcons: StudioNameIcon[] = [
    {
        key: "nha",
        transformOrigin: "right",
        icon: "nha.svg",
        sx: nhaIconSx,
    },
    {
        key: "des",
        transformOrigin: "left",
        icon: "des.svg",
        sx: desIconSx,
        margin: { ml: "10px" },
    },
];

const recordsIcon: StudioNameIcon = {
    key: "records",
    transformOrigin: "center",
    icon: "records.svg",
    sx: recordsIconSx,
};

export { nhaDesIcons, recordsIcon };
