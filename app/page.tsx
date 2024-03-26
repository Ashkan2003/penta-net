import {
  ButtonGroup,
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden h-[400px] sm:h-[600px] ">
        <Image
          src="/shogun.jpg"
          alt="poster"
          fill
          // width={1500}
          // height={600}
          className="z-0 absolute bg-gradient-to-br  from-[#00000000] to-[#000000d5] "
        />
        <div className="absolute z-10 w-full h-full bg-gradient-to-br from-[#00000000] to-[#000000d5] " />
      </div>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <p className="font-IranSansWeb">دیده بان کلاسیک</p>
      <p>دیده بان کلاسیک</p>
      <Typography>دیده بان کلاسیک</Typography>
      <Typography>دیده بان کلاسیک</Typography>
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
