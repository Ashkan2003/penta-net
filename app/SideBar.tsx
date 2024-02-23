"use client";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useBoundStore } from "./zustand/store";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const drawerWidth = 240;

const menuListArray: { title: string; icon: any }[] = [
  {
    title: "دیده بان کلاسیک",
    icon: <HomeIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "دیده بان تکنیکال",
    icon: <WhatshotIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "نقشه بازار",
    icon: <EventNoteIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "اوراق بدهی",
    icon: <FilterAltIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
];

export default function SideBar() {
  // get this from zustand
  const isDrawerOpen = useBoundStore((state) => state.isDrawerOpen);
  const handleDrawerTogglerSet = useBoundStore(
    (state) => state.handleDrawerTogglerSet
  );

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    // setIsClosing(true);
    // setMobileOpen(false);
    handleDrawerTogglerSet(false);
  };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };

  const drawer = (
    <Stack
      sx={
        {
          // bgcolor: "primary.main",
        }
      }
    >
      <Toolbar sx={{ bgcolor: "primary.main", paddingLeft: "6px" }}>
        <Image src="/logo.png" width={40} height={10} alt="logo" />
        <Typography
          sx={{ color: "white", fontSize: "20px", marginLeft: "6px" }}
        >
          پنتانت
        </Typography>
      </Toolbar>
      <Divider sx={{ bgcolor: "#827d7d" }} />
      <List>
        {menuListArray.map((item) => (
          <ListItem key={item.title} sx={{ padding: 0 }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider variant="middle" sx={{ bgcolor: "#CCEA8E" }} />
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );

  // Remove this const when copying and pasting into your project.
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          PaperProps={{
            sx: { bgcolor: "primary.main" },
          }}
          open={isDrawerOpen}
          // onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* this is for mobile-size drawer */}
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: { bgcolor: "primary.main" },
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {/* this is for desktop-size drawer */}
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
