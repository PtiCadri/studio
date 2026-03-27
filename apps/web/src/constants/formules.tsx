export type Formule = {
    titre: string,
    color: string,
    description: React.ReactNode,
    tarif: {
        prix: string,
        unit?: string
    },
};

export const formules: Formule[] = [
    {
        titre: "Formule 1 Titre",
        color: "divider",
        description: <>Enregistrement SANS LIMTE DE TEMPS<br/>Mixage<br/>Mastering</>,
        tarif: {prix: "100 €"},
    },
    {
        titre: "Formule Projet",
        color: "text.secondary",
        description: "À partir de 4 titres ( EP / Mixtape )",
        tarif: {
            prix: "80 €",
            unit: "/ titre"
        },
    },
    {
        titre: "Formule Album",
        color: "text.primary",
        description: "À partir de 8 titres",
        tarif: {
            prix: "60 €",
            unit: "/ titre"
        },
    },
];
