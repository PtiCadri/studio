import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    typography: {
        fontFamily: `var(--font-ibm-plex), sans-serif`,
        h1: { fontWeight: 700, letterSpacing: "-0.02em" },
        h2: { fontWeight: 600, letterSpacing: "-0.01em" },
        h3: { fontWeight: 600 },
        button: { textTransform: "none", fontWeight: 600 },
    },

    palette: {
        mode: "dark",

        background: {
            default: "#000000",
            paper: "#0D0D0D",
        },

        primary: {
            main: "#FFFFFF",
        },

        secondary: {
            main: "#BDBDBD",
        },

        action: {
            hover: "rgba(255,255,255,0.06)",
            selected: "rgba(255,255,255,0.10)",
            disabled: "rgba(255,255,255,0.30)",
            disabledBackground: "rgba(255,255,255,0.12)",
        },

        text: {
            primary: "#FFFFFF",
            secondary: "#BDBDBD",
        },

        divider: "#666666",
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(255,255,255,0.6) transparent",
                },
                "::-webkit-scrollbar": {
                    width: "6px",
                },
                "::-webkit-scrollbar-track": {
                    background: "transparent",
                },
                "::-webkit-scrollbar-thumb": {
                    background:
                        "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.3))",
                    borderRadius: "10px",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    background: "rgba(255,255,255,0.4)",
                },
            },
        },
    },
});
