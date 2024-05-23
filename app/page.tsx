"use client";
import RandomMovie from "./components/layout/RandomMovie";
import FullPageLoadingSpinner from "./components/reusable-components/FullPageLoadingSpinner";
import { useNowPlayingMovies } from "./react-query/movie/useNowPlayingMovies";

const HomePage = () => {
  const { nowPlayingMovies, isLoadingNowPlayingMovies } = useNowPlayingMovies();

  if (isLoadingNowPlayingMovies) return <FullPageLoadingSpinner />;

  // generate a random number from 1 to 20
  const randomNumFrom1to20 = Math.floor(Math.random() * 20);

  // the page that we fetch from api is a array of 20 item. so every time the user refresh or see this page a new movie detial will show
  const randomMovieId = nowPlayingMovies?.at(randomNumFrom1to20)?.id;

  return <RandomMovie randomMovieId={randomMovieId!} />;
};

export default HomePage;
