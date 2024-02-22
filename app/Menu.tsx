"use client";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridOnIcon from "@mui/icons-material/GridOn";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
type Anchor = "top" | "left" | "bottom" | "right";

const menuListArray: { title: string; icon: any }[] = [
  {
    title: "دیده بان کلاسیک",
    icon: <GridOnIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "دیده بان تکنیکال",
    icon: <TableChartIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "نقشه بازار",
    icon: <MapOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "اوراق بدهی",
    icon: <LocalAtmOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "پیام ها",
    icon: <EmailOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
];

const secondMenuListArray: { title: string; icon: any }[] = [
  {
    title: "سبد سهام",
    icon: (
      <ShoppingBasketOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />
    ),
  },
  {
    title: "عملکر سبد سهام",
    icon: <NewspaperOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "افزایش سرمایه",
    icon: (
      <PriceChangeOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />
    ),
  },
  {
    title: "سودهای تقسیمی من",
    icon: <PieChartOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />,
  },
  {
    title: "تراکنش های دستی",
    icon: (
      <AccountTreeOutlinedIcon fontSize="small" sx={{ color: "#CCEA8E" }} />
    ),
  },
];

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      // color="white"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Typography color="#CCEA8E">دیده بان بازار</Typography>
        </ListItem>
        <Divider variant="middle" sx={{ bgcolor: "#CCEA8E" }} />
        {menuListArray.map((item) => (
          <ListItem key={item.title} sx={{ padding: 0 }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <Typography color="#CCEA8E">مدیریت سبد دارایی</Typography>
        </ListItem>
        <Divider variant="middle" sx={{ bgcolor: "#CCEA8E" }} />
        {secondMenuListArray.map((item) => (
          <ListItem key={item.title} sx={{ padding: 0 }} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "30px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            size="large"
            onClick={toggleDrawer(anchor, true)}
            color="secondary"
            aria-label="add an alarm"
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>

          <Drawer
            PaperProps={{
              sx: { bgcolor: "#46566E",position:"" },
            }}
            BackdropProps={{ invisible: true }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
