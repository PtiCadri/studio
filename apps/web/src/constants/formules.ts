export type Formule = {
    titre: string,
    description: string
    tarif: string,
};

export const formules: Formule[] = [
    {
        titre: "Formule 1 Titre",
        description: "Enregistrement SANS LIMTE DE TEMPS + Mixage + Mastering",
        tarif: "100 €",
    },
    {
        titre: "Formule Projet",
        description: "À partir de 4 titres ( EP / Mixtape )",
        tarif: "80 € par titre",
    },
    {
        titre: "Formule Album",
        description: "À partir de 8 titres",
        tarif: "60 € par titre",
    },
];
