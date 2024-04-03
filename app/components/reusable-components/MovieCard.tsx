import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";

export default function MovieCard() {
  return (
    <Card className="group relative" sx={{ maxWidth: 300, bgcolor: "#1E2027" }}>
      <CardActionArea>
        <Image
          className="group-hover:brightness-50 transition-all duration-300 hover:duration-300"
          src="/panda.webp"
          alt="movie-pic"
          width={250}
          height={200}
        />
        <div className="group-hover:block  hidden absolute bottom-24 right-[8px]">
          <div className="flex flex-col text-[14px] gap-2">
            <div className="flex pt-1">
              <span className="font-bold pe-2">IMDB</span>
              <p className="font-bold">9</p>
            </div>
            <div className="flex gap-1 items-center">
              <FavoriteIcon />
              <span className="font-bold">90%</span>
            </div>
            <div className="flex gap-1 items-center">
              <WysiwygRoundedIcon />
              <span>زیرنویس</span>
            </div>
          </div>
        </div>
        <CardContent
          sx={{ paddingX: "7px", paddingY: "10px", paddingBottom: "4px" }}
        >
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="text.primary"
            gutterBottom
            component="div"
          >
            پاندای کونگ فوکار 4
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center">
              <Typography
                color="text.secondary"
                fontSize={14}
                fontWeight="bold"
              >
                10/
              </Typography>
              <Typography color="text.primary" fontSize={14} fontWeight="bold">
                7.09
              </Typography>
              <StarRateRoundedIcon
                sx={{ color: "yellow", marginBottom: "6px" }}
              />
            </Stack>
            <Typography fontSize={14} fontWeight="bold" color="text.secondary">
              2023
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
