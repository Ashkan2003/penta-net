"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { movieListType } from "@/app/types/movieTypes";

interface Props {
  sliderTitle: string;
  movieList: movieListType[];
}

const MovieSlider = ({ sliderTitle, movieList }: Props) => {
  return (
    <div className="space-y-2">
      <p className="text-xl">{sliderTitle}</p>
      <Swiper
        className=" w-[250px] xs:w-[450px] !sm:w-[590px] md:w-[650px] lg:w-full"
        navigation={true}
        spaceBetween={10}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },

          1174: {
            slidesPerView: 5,
          },
        }}
      >
        {movieList?.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
