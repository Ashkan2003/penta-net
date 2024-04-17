import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardMedia,
  CircularProgress,
  Stack,
} from "@mui/material";
import Image from "next/image";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import { movieListType } from "@/app/types/movieTypes";
import Link from "next/link";

interface Props {
  movie: movieListType;
}

export default function MovieCard({ movie }: Props) {
  const movieImdbRate = Math.round(movie.vote_average * 10) / 10;
  const movieReleaseDate = movie.release_date.slice(0, 4);
  const moviePopularityPercent = Math.round(movie.popularity)
    .toString()
    .slice(0, 2);

  return (
    <Card className="group relative" sx={{ bgcolor: "#1E2027" }}>
      <CardActionArea LinkComponent={Link} href={`/movie/${movie.id}`}>
        <CardMedia sx={{ position: "relative" }}>
          <Image
            className="group-hover:brightness-50 transition-all duration-300 hover:duration-300"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path!}`}
            unoptimized // this is nesesary for not nextjs complane aboat site
            alt="movie-pic"
            width={250}
            height={200}
            // fill
            // style={{ objectFit: "contain" }}
          />
          <div className="group-hover:block  hidden absolute bottom-24 right-[8px]">
            <div className="flex flex-col text-[14px] gap-2">
              <div className="flex pt-1">
                <span className="font-bold pe-2">IMDB</span>
                <p className="font-bold">{movieImdbRate}</p>
              </div>
              <div className="flex gap-1 items-center">
                <FavoriteIcon />
                <span className="font-bold">{moviePopularityPercent}%</span>
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
            {movie.title}
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
                {movieImdbRate}
              </Typography>
              <StarRateRoundedIcon
                sx={{ color: "yellow", marginBottom: "6px" }}
              />
            </Stack>
            <Typography fontSize={14} fontWeight="bold" color="text.secondary">
              {movieReleaseDate}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
