"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia, Stack } from "@mui/material";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import Link from "next/link";
import { tvSeriesListType } from "@/app/types/tvSeriesTypes";

interface Props {
  tvSeries: tvSeriesListType;
}

export default function TVSeriesCard({ tvSeries }: Props) {
  const tvSeriesImdbRate = Math.round(tvSeries.vote_average * 10) / 10;
  const tvSeriesReleaseDate = tvSeries.first_air_date.slice(0, 4);
  const tvSeriesPopularityPercent = Math.round(tvSeries.popularity)
    .toString()
    .slice(0, 2);

  return (
    <Card className="group relative" sx={{ bgcolor: "#1E2027" }}>
      <CardActionArea LinkComponent={Link} href={`/tvSeries/${tvSeries.id}`}>
        <CardMedia sx={{ position: "relative" }}>
          <Image
            className="group-hover:brightness-50 transition-all duration-300 hover:duration-300"
            src={`https://image.tmdb.org/t/p/original${tvSeries.poster_path!}`}
            unoptimized // this is nesesary for not nextjs complane aboat site
            alt="tvSeries-pic"
            width={250}
            height={200}
            // fill
            // style={{ objectFit: "contain" }}
          />
          <div className="group-hover:block  hidden absolute bottom-24 right-[8px]">
            <div className="flex flex-col text-[14px] gap-2">
              <div className="flex pt-1">
                <span className="font-bold pe-2">IMDB</span>
                <p className="font-bold">{tvSeriesImdbRate}</p>
              </div>
              <div className="flex gap-1 items-center">
                <FavoriteIcon />
                <span className="font-bold">{tvSeriesPopularityPercent}%</span>
              </div>
              <div className="flex gap-1 items-center">
                <WysiwygRoundedIcon />
                <span>زیرنویس</span>
              </div>
            </div>
          </div>
        </CardMedia>
        <CardContent>
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="text.primary"
            gutterBottom
            component="div"
          >
            {tvSeries.name}
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
                {tvSeriesImdbRate}
              </Typography>
              <StarRateRoundedIcon
                sx={{ color: "yellow", marginBottom: "6px" }}
              />
            </Stack>
            <Typography fontSize={14} fontWeight="bold" color="text.secondary">
              {tvSeriesReleaseDate}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
