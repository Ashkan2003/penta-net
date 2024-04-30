import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Divider, IconButton } from "@mui/material";
import AuthState from "./AuthState";

const iconArray: { title: string; icon: any }[] = [
  {
    title: "پروفایل",
    icon: <NotificationsIcon fontSize="small" sx={{ color: "success.main" }} />,
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
        sx={{ bgcolor: "primary.light", marginRight: "10px" }}
        orientation="vertical"
        variant="middle"
        flexItem
      />
      <AuthState />
    </Box>
  );
};

export default HeaderIcons;
