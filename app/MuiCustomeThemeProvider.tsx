"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-IranSansWeb)",
  },
  palette: {
    primary: {
      light: "#a8a8a8",
      main: "#3c3f4b",
    },
    secondary: {
      main: "#25282c",
    },
    success: {
      main: "#FA8A5D",
    },
  },
});

export default function MuiCustomThemeProvider(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
