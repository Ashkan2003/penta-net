"use client";
import { AppBar, Toolbar, IconButton, Divider } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useBoundStore } from "@/zustand/store";
import AutoCompleteBox from "./AutoCompleteBox";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  const handleDrawerToggle = useBoundStore(
    (state) => state.handleDrawerToggler
  );

  return (
    <AppBar
      // position="fixed"
      sx={{
        width: { md: `calc(100% - ${240}px)` },
        ml: { md: `${240}px` },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* the menu icon */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* the search box */}
        <AutoCompleteBox />
        {/* the header icons list */}
        {/* <HeaderIcons /> */}
      </Toolbar>
      <Divider sx={{ bgcolor: "#827d7d" }} />
    </AppBar>
  );
};

export default Header;
