import Image from "next/image";
import { useMovieImgs } from "@/app/react-query/movie/useMovieImgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Skeleton } from "@mui/material";
import { useTVSeriesImgs } from "@/app/react-query/tvSeries/useTVSeriesImgs";

interface Props {
  tvSeriesId: number;
}

// the num of imgs that we what to show in swiper slider
const SHOWEN_IMGS_TO_USER = 10;

const TVSeriesImgs = ({ tvSeriesId }: Props) => {
  const { tvSeriesImgs, isLoadingTVSeriesImgs, error } =
    useTVSeriesImgs(tvSeriesId);
  if (isLoadingTVSeriesImgs)
    return (
      <>
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          className="rounded-lg w-full !h-[200px] bg-stone-900"
        />
      </>
    );

  // get backdropImgs only the count of "SHOWEN_IMGS_TO_USER" from array
  const moviebackdropImgs = tvSeriesImgs.backdrops.filter(
    (backdrop: any, index: number) => {
      if (index < SHOWEN_IMGS_TO_USER) {
        return backdrop;
      }
    }
  );

  // get backdropImgs-file path and store them into the arry
  const movieImgsFilePath = moviebackdropImgs.map((img: any) => {
    return img.file_path;
  });

  return (
    <Swiper
      navigation={true}
      spaceBetween={30}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
      className="h-40 w-[280px] xs:w-[370px] !sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1240px] "
    >
      {movieImgsFilePath.map((imgSrc: string, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={`https://image.tmdb.org/t/p/original${imgSrc}`}
            alt="movieImgs"
            className="max-w-96  object-cover rounded-lg"
            fill
            unoptimized
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TVSeriesImgs;
