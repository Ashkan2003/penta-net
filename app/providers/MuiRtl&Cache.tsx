"use client";
// this component is for fixing the ccs preload issue (ssr mui) and rtl the mui 
// see the mui doc for rtl 
// see the mui doc for mui-ssr-nextjs  
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = {
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
};

export function MuiRtlAndAppRouterCacheProvider(props: any) {
  return (
    // <CacheProvider value={cacheRtl}>
    // to fix the css-preload issue mui doc recommanded to use this provider
    <AppRouterCacheProvider options={cacheRtl}>
      {props.children}
    </AppRouterCacheProvider>
    // </CacheProvider>
  );
}