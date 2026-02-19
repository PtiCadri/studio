import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
    mode: "dark",

    background: {
      default: "#0A0A0F",
      paper: "#111118",
    },

    primary: {
      main: "#FFFFFF",
    },

    secondary: {
      main: "#B3B3C6",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3C6",
    },

    divider: "#222230",
  },
});
