"use client";
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
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";

const drawerWidth = 240;

const menuListArray: { title: string; icon: any }[] = [
  {
    title: "خانه",
    icon: <HomeIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "ترندها",
    icon: <WhatshotIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "جدول پخش",
    icon: <EventNoteIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "دسته بندی ها",
    icon: <FilterAltIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
];

const menuListArray2: { title: string; icon: any }[] = [
  {
    title: "تاریخچه",
    icon: <HistoryIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "ذخیره شده ها",
    icon: <BookmarkIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "کالکشن ها",
    icon: (
      <CollectionsBookmarkIcon
        fontSize="small"
        sx={{ color: "success.main" }}
      />
    ),
  },
  {
    title: "دانلود ها",
    icon: <SaveAltIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
];

const menuListArray3: { title: string; icon: any }[] = [
  {
    title: "تنظیمات",
    icon: <SettingsIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "پروفایل",
    icon: <AccountCircleIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
];

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1); // the current selected watch from the list

  // get this from zustand
  const isDrawerOpen = useBoundStore((state) => state.isDrawerOpen);
  const handleDrawerTogglerSet = useBoundStore(
    (state) => state.handleDrawerTogglerSet
  );

  const handleDrawerClose = () => {
    handleDrawerTogglerSet(false);
  };

  // this function is for activating the selected watch by adding some style
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    handleDrawerClose();
  };

  const drawer = (
    <Stack
      sx={{
        color: "primary.light",
      }}
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
        {menuListArray.map((item, index) => (
          <Link href="/admin" key={item.title}>
            <ListItem sx={{ padding: 0 }} disablePadding>
              <ListItemButton
                className={` ${selectedIndex === index && "!text-red-600"}`}
                // selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider variant="middle" sx={{ bgcolor: "primary.light" }} />
      <List>
        {menuListArray2.map((item) => (
          <Link href="/admin" key={item.title}>
            <ListItem sx={{ padding: 0 }} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider variant="middle" sx={{ bgcolor: "primary.light" }} />
      <List>
        {menuListArray3.map((item) => (
          <Link href="/admin" key={item.title}>
            <ListItem sx={{ padding: 0 }} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider variant="middle" sx={{ bgcolor: "primary.light" }} />
    </Stack>
  );

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
          variant="temporary"
          PaperProps={{
            sx: { bgcolor: "primary.main" },
          }}
          open={isDrawerOpen}
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
