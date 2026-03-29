type PrestationId = "recording" | "mixing" | "mastering" | "live";

type Prestation = {
    id: PrestationId;
    title: string;
    icon: string;
};

export type { Prestation, PrestationId };
