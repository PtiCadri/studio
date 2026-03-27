import React from "react";

export type Prestation = {
  key: string;
  titre: React.ReactNode;
  description: string;
  tarif: {
    prix: string;
    unit?: string;
  };
  iconPath: string;
};

export const prestations: Prestation[] = [
  {
    key: "enregistrement",
    titre: (
      <>
        ENREGISTREMENT
        <br />
        (2 heures minimum)
      </>
    ),
    description: "Recording + Edition",
    tarif: {
      prix: "30 €",
      unit: "/ heure",
    },
    iconPath: "/icons/enregistrement.svg",
  },
  {
    key: "mixage",
    titre: <>MIXAGE</>,
    description:
      "Mixage de l’ensemble du titre Retouches possibles si nécessaire",
    tarif: {
      prix: "40 €",
      unit: "/ titre",
    },
    iconPath: "/icons/mixage.svg",
  },
  {
    key: "mastering",
    titre: <>MASTERING</>,
    description: "Mastering final du titre",
    tarif: {
      prix: "20 €",
      unit: "/ titre",
    },
    iconPath: "/icons/mastering.svg",
  },
];
