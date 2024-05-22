"use client";
import FullPageLoadingSpinner from "../components/reusable-components/FullPageLoadingSpinner";
import MovieSlider from "../components/reusable-components/MovieSlider";
import { useMoviesByGenre } from "../react-query/movie/useMovieWithGenre";

const CategoriesPage = () => {
  const { movieList: warMovieList, isLoadingMoviesByGenre: isLoading1 } =
    useMoviesByGenre("War,10752");
  const { movieList: actionMovieList, isLoadingMoviesByGenre: isLoading2 } =
    useMoviesByGenre("Action,28");
  const { movieList: comedyMovieList, isLoadingMoviesByGenre: isLoading3 } =
    useMoviesByGenre("Comedy,35");
  const { movieList: animationMovieList, isLoadingMoviesByGenre: isLoading4 } =
    useMoviesByGenre("Animation,16");
  const { movieList: crimeMovieList, isLoadingMoviesByGenre: isLoading5 } =
    useMoviesByGenre("Crime,80");
  const { movieList: dramaMovieList, isLoadingMoviesByGenre: isLoading6 } =
    useMoviesByGenre("Drama,18");
  const { movieList: musicMovieList, isLoadingMoviesByGenre: isLoading7 } =
    useMoviesByGenre("Music,10402");
  const { movieList: fantasyMovieList, isLoadingMoviesByGenre: isLoading8 } =
    useMoviesByGenre("Fantasy,14");

  if (
    isLoading1 &&
    isLoading2 &&
    isLoading3 &&
    isLoading4 &&
    isLoading5 &&
    isLoading6 &&
    isLoading7 &&
    isLoading8
  )
    return <FullPageLoadingSpinner />;

  return (
    <div className="p-5">
      {/* war movies */}
      <MovieSlider sliderTitle="جنگ" movieList={warMovieList!} />
      {/* action movies */}
      <MovieSlider sliderTitle="اکشن" movieList={actionMovieList!} />
      {/* comedy movies */}
      <MovieSlider sliderTitle="کمدی" movieList={comedyMovieList!} />
      {/* animation movies */}
      <MovieSlider sliderTitle="انیمیشن" movieList={animationMovieList!} />
      {/* crime movies */}
      <MovieSlider sliderTitle="جنایی" movieList={crimeMovieList!} />
      {/* drama movies */}
      <MovieSlider sliderTitle="درام" movieList={dramaMovieList!} />
      {/* music movies */}
      <MovieSlider sliderTitle="موسیقی" movieList={musicMovieList!} />
      {/* fntasy movies */}
      <MovieSlider sliderTitle="فانتزی" movieList={fantasyMovieList!} />
    </div>
  );
};

export default CategoriesPage;
