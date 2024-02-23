"use client";
import {
  ButtonGroup,
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useBoundStore } from "./zustand/store";
export default function Home() {
  const bearCount = useBoundStore((state) => (state.bears = 1));
  const addbearCount = useBoundStore((state) => state.addBear);
  const fishCount = useBoundStore((state) => state.fishes);
  const addfishCount = useBoundStore((state) => state.addFishes);

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <p className="font-IranSansWeb">دیده بان کلاسیک</p>
      <p>دیده بان کلاسیک</p>
      <Typography>دیده بان کلاسیک</Typography>
      <Typography>دیده بان کلاسیک</Typography>
      <p>{bearCount}</p>
      <Button variant="contained" onClick={addbearCount}>
        bear
      </Button>
      <p>{fishCount}</p>
      <Button variant="contained" onClick={addfishCount}>
        fish
      </Button>
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];
