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
import { useBoundStore } from "@/zustand/store";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

const menuListArray: { title: string; href: string; icon: any }[] = [
  {
    title: "خانه",
    href: "/",
    icon: <HomeIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "فیلم ها",
    href: "/popularMoviesList",
    icon: <WhatshotIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "سریال",
    href: "/popularTVSeriesList",
    icon: <EventNoteIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "دسته بندی ها",
    href: "/categories",
    icon: <FilterAltIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "لیست های من",
    href: "/userList",
    icon: (
      <CollectionsBookmarkIcon
        fontSize="small"
        sx={{ color: "success.main" }}
      />
    ),
  },
  {
    title: "تاریخچه",
    href: "/underConstructionPage",
    icon: <HistoryIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "ذخیره شده ها",
    href: "/underConstructionPage",
    icon: <BookmarkIcon fontSize="small" sx={{ color: "success.main" }} />,
  },

  {
    title: "دانلود ها",
    href: "/underConstructionPage",
    icon: <SaveAltIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "تنظیمات",
    href: "/underConstructionPage",
    icon: <SettingsIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
  {
    title: "پروفایل",
    href: "/userProfile",
    icon: <AccountCircleIcon fontSize="small" sx={{ color: "success.main" }} />,
  },
];

export default function SideBar() {
  const [selectedListItem, setSelectedListItem] = React.useState("خانه"); // the current selected watch from the list
  const currentPath = usePathname(); //Get the current pathname

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
    listItemTitle: string
  ) => {
    setSelectedListItem(listItemTitle);
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
          <Link href={item.href} key={item.title}>
            <ListItem
              className={` ${
                item.href === currentPath &&
                "!text-red-600 bg-indigo-950 bg-opacity-30 transition-all"
              }`}
              sx={{ padding: 0 }}
              disablePadding
            >
              <ListItemButton
                onClick={(event) => handleListItemClick(event, item.title)}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            {index == 3 && (
              <Divider variant="middle" sx={{ bgcolor: "primary.light" }} />
            )}
            {index == 7 && (
              <Divider variant="middle" sx={{ bgcolor: "primary.light" }} />
            )}
          </Link>
        ))}
      </List>
    </Stack>
  );

  return (
    <>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
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
            display: { xs: "block", md: "none" },
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
            display: { xs: "none", md: "block" },
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
