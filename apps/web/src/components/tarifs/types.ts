type Formule = {
    titre: string;
    color: string;
    description: React.ReactNode;
    tarif: {
        prix: string;
        unit?: string;
    };
};

type Prestation = {
    key: string;
    titre: React.ReactNode;
    description: string;
    tarif: {
        prix: string;
        unit?: string;
    };
    iconPath: string;
};

export type { Formule, Prestation };
