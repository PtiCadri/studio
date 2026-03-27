export type Formule = {
  titre: string;
  color: string;
  description: React.ReactNode;
  tarif: {
    prix: string;
    unit?: string;
  };
};

export const formules: Formule[] = [
  {
    titre: "FORMULE 1 TITRE",
    color: "divider",
    description: (
      <>
        Enregistrement SANS LIMTE DE TEMPS
        <br />
        Mixage
        <br />
        Mastering
      </>
    ),
    tarif: { prix: "100 €" },
  },
  {
    titre: "FORMULE PROJET",
    color: "text.secondary",
    description: "À partir de 4 titres ( EP / Mixtape )",
    tarif: {
      prix: "80 €",
      unit: "/ titre",
    },
  },
  {
    titre: "FORMULE ALBUM",
    color: "text.primary",
    description: "À partir de 8 titres",
    tarif: {
      prix: "60 €",
      unit: "/ titre",
    },
  },
];
