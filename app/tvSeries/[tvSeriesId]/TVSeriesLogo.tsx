import { useTVSeriesImgs } from "@/app/react-query/tvSeries/useTVSeriesImgs";
import Image from "next/image";

interface Props {
  tvSeriesId: number;
}

const TVSeriesLogo = ({ tvSeriesId }: Props) => {
  const { isLoadingTVSeriesImgs, tvSeriesImgs } = useTVSeriesImgs(tvSeriesId);

  if (isLoadingTVSeriesImgs) return <div className="h-[52px]"></div>;

  // get tvSeries-logo file patch from the imgs array
  const tvSeriesLogoFilePatch = tvSeriesImgs.logos[0]?.file_path;

  // if the logo-path was not empety then render img
  if (tvSeriesLogoFilePatch) {
    return (
      <Image
        src={`https://image.tmdb.org/t/p/original/${tvSeriesLogoFilePatch}`}
        unoptimized
        width={200}
        height={50}
        alt="logo"
      />
    );
  } else return <div className="h-[52px]"></div>;
};

export default TVSeriesLogo;
