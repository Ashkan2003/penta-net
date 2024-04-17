// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/material-nextjs @emotion/cache
// npm install stylis stylis-plugin-rtl
// npm i --save-dev @types/stylis
// npm install zustand for global state managment
// npx -y next-video init
// npm install axios
// npm i @tanstack/react-query
// npm i @tanstack/react-query-devtools
// npm i react-hot-toast
// npm install react-intersection-observer --save // to implement the infinite movie scroll
// npm i react-youtube
import { Box, Toolbar } from "@mui/material";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/layout/Header";
import MuiCustomThemeProvider from "./providers/MuiCustomeThemeProvider";
import { MuiRtlAndAppRouterCacheProvider } from "./providers/MuiRtl&Cache";
import SideBar from "./components/layout/SideBar";
import "./globals.css";
import ReactQueryProvider from "./providers/QueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
// this is the way of importing a local font
const IranSansWeb = localFont({
  src: "../public/fonts/teqh_iransansweb.ttf",
  variable: "--font-IranSansWeb",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className="bg-[#1E2027]">
      <body className={IranSansWeb.variable}>
        {/* this is for custom mui theme */}
        <MuiCustomThemeProvider>
          {/* this is for mui-rtl and catch-provider */}
          <MuiRtlAndAppRouterCacheProvider>
            <ReactQueryProvider>
              <Box sx={{ display: "flex", bgcolor: "#1E2027" }}>
                <SideBar />
                <Header />
                <Box
                  component="main"
                  sx={{
                    flexGrow: 1,
                    width: { md: `calc(100% - ${240}px)` },
                  }}
                >
                  <Toolbar />
                  <main className="bg-[#1E2027]">{children}</main>
                </Box>
              </Box>
              <Toaster />
              <ReactQueryDevtools position="left" initialIsOpen={false} />
            </ReactQueryProvider>
          </MuiRtlAndAppRouterCacheProvider>
        </MuiCustomThemeProvider>
      </body>
    </html>
  );
}
