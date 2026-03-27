import { IBM_Plex_Sans, Montserrat } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-ibm-plex",
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-montserrat",
});
