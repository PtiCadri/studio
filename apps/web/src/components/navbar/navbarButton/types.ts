type NavbarLink = {
    key: string;
    label: string;
    href: string;
    ariaLabel: string;
};

type NavbarButtonProps = {
    link: NavbarLink;
};

export type { NavbarButtonProps, NavbarLink };
