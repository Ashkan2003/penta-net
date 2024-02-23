"use client";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useBoundStore } from "./zustand/store";

const Header = () => {
  const handleDrawerToggle = useBoundStore(
    (state) => state.handleDrawerToggler
  );


  return (
    <AppBar
      // position="fixed"
      sx={{
        width: { sm: `calc(100% - ${240}px)` },
        ml: { sm: `${240}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
