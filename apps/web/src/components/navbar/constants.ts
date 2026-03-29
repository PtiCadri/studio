import { type NavbarLink } from "@/components/navbar/types";

const navbarLinks: NavbarLink[] = [
    {
        key: "materiel",
        label: "Matériel",
        href: "/materiel",
        ariaLabel: "Vers la page Matériel",
    },
    {
        key: "references",
        label: "Références",
        href: "/references",
        ariaLabel: "Vers la page Références",
    },
    {
        key: "shop",
        label: "Shop",
        href: "/shop",
        ariaLabel: "Vers la page Shop",
    },
    {
        key: "tarifs",
        label: "Tarifs",
        href: "/tarifs",
        ariaLabel: "Vers la page Tarifs",
    },
    {
        key: "contact",
        label: "Contact",
        href: "/contact",
        ariaLabel: "Vers la page Contact",
    },
];

const homePage: NavbarLink = {
    key: "accueil",
    label: "Accueil",
    href: "/",
    ariaLabel: "Vers la page d'accueil",
};

export { homePage, navbarLinks };
