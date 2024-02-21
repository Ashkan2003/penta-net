"use client"
import { ButtonGroup, Button, Typography, Autocomplete, TextField } from "@mui/material";
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },]
export default function Home() {
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
      <p >دیده بان کلاسیک</p>
      <Typography>دیده بان کلاسیک</Typography>
    </div>
  );
}
