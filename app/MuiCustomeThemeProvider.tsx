"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-IranSansWeb)",
  },
  palette: {
    primary: {
      main: "#a55926",
    },
    secondary: {
      main: "#25282c",
    },
  },
});

export default function MuiCustomThemeProvider(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
