import { ButtonGroup, Button, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RoundedBtn from "@/components/RoundedBtn";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ThumbDownRoundedIcon from "@mui/icons-material/ThumbDownRounded";
export default function Home() {
  return (
    <div className="bg-[#121212] h-[100vh]">
      <div className="relative overflow-hidden h-[350px] sm:h-[500px] md:h-[550px] ">
        <Image
          className=" absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
          src="/bleach.jpg"
          alt="poster"
          fill
          // width={1500}
          // height={600}
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-[#ffffff00] to-[#121212] " />
        <div className="absolute p-5 flex flex-col gap-6 text-white">
          {/* the film logo */}
          <Image src="/bleach-logo.png" width={200} height={50} alt="logo" />
          {/* the film title */}
          <p className="text-[20px]">بلیچ: جنگ خونین هزار ساله</p>
          {/* the film info */}
          <div className="flex justify-between w-[500px]">
            <span className="px-2 py-1 text-sm font-bold  rounded-2xl text-black ra  bg-gradient-to-b  from-[#f69067] to-[#f95a1b]">
              15+
            </span>
            <span>2022</span>
            <div className="flex">
              <span className="font-bold pe-2">IMDB</span>
              <p>9</p>
            </div>
            <div>
              <FavoriteIcon />
              90%
            </div>
            <div>
              <KeyboardVoiceIcon />
              دوبله پنتانت
            </div>
            <div>
              <WysiwygRoundedIcon />
              زیرنویس
            </div>
          </div>
          {/* the film des */}
          <p className="w-[550px] text-[14px]">
            هنگامی که یک دشمن جدید در شهر ظاهر می شود و آرامش را از بین می برد،
            ساکنان شهر بدون هیچ ردی ناپدید می شوند و ایچیگو برای کمک به مردم
            وارد عمل می شود و...
          </p>
          {/* film btns */}
          <div className="flex items-center">
            <Button
              size="large"
              color="info"
              variant="contained"
              startIcon={<PlayArrowRoundedIcon className="!text-[30px]" />}
            >
              خرید اشتراک
            </Button>
            <div className="flex justify-between w-40 ps-3">
              <RoundedBtn color="primary" Icon={AddRoundedIcon} />
              <RoundedBtn color="primary" Icon={ThumbUpAltRoundedIcon} />
              <RoundedBtn color="primary" Icon={ThumbDownRoundedIcon} />
            </div>
          </div>
          {/* film actors and directors */}
          <div className="flex flex-col gap-1">
            <Typography fontSize={12} color="primary.light">
              ستارگان: Masakazu MoritaYuki MatsuokaHiroki YasumotoNoriaki
              Sugiyama
            </Typography>
            <Typography fontSize={12} color="primary.light">کارگردان: Tomohisa Taguchi</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
