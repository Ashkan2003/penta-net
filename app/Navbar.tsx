import Image from "next/image";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Menu from "./Menu";
export default function Navbar() {
  return (
    <header>
      <nav className="flex  items-center justify-between  ">
        <div className="flex  items-center">
          <div className="flex items-center   pe-3 ">
            <Image src="/Trade-brand.png" alt="brand" width="50" height="30" />
            <Menu />
            <Typography className="hidden md:block" color="white">
              منو-دیده بان کلاسیک
            </Typography>
          </div>
        </div>
      </nav>
    </header>
  );
}
