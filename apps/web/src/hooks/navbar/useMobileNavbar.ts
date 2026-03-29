"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { homePage, navbarLinks } from "@/components/navbar/constants";

export default function useMobileNavbar() {
    const pathname = usePathname();

    const currentLink =
        navbarLinks.find((link) => link.href === pathname) ?? homePage;

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isOpen = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return {
        anchorEl,
        currentLink,
        handleClose,
        handleOpen,
        isOpen,
        pathname,
    };
}
