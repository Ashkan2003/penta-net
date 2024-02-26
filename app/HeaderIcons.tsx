import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import { Box, IconButton, Divider } from '@mui/material';



const iconArray: { title: string; icon: any }[] = [
    {
      title: "پروفایل",
      icon: (
        <NotificationsIcon fontSize="small" sx={{ color: "success.main" }} />
      ),
    },
    {
      title: "تنظیمات",
      icon: <BookmarkIcon fontSize="small" sx={{ color: "success.main" }} />,
    },
    {
      title: "تنظیمات",
      icon: <HistoryIcon fontSize="small" sx={{ color: "success.main" }} />,
    },
  ];


const HeaderIcons = () => {
  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      color: "white",
    }}
  >
    {iconArray.map((item, index) => (
      <IconButton key={index}>{item.icon}</IconButton>
    ))}

    <Divider
      sx={{ bgcolor: "primary.light" }}
      orientation="vertical"
      variant="middle"
      flexItem
    />
    <IconButton>
      <AccountCircleIcon sx={{ color: "success.main" }} />
    </IconButton>
  </Box>
  )
}

export default HeaderIcons