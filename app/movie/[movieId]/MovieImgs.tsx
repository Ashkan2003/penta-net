"use client";
import { useMovieImgs } from "@/app/react-query/movie/useMovieImgs";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Image from "next/image";
interface Props {
  movieId: number;
}

const MovieImgs = ({ movieId }: Props) => {
  const { movieImgs, isLoadingMovieImgs } = useMovieImgs(movieId);

  if (isLoadingMovieImgs) return null;

  const movieImgss = movieImgs.backdrops.filter((img, index) => {
    if (index < 10) {
      return img.file_path;
    }
  });

  const movieImgSrcs = movieImgss.map((img) => {
    return img.file_path;
  });

  return (
    <div className="">
      <Swiper
        // slidesPerView={1}
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400:{

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
        className="h-40 w-[260px] xs:w-[350px] !sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1200px] "
      >
        {movieImgSrcs.map((imgSrc, index) => (
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
    </div>
  );
};

export default MovieImgs;
