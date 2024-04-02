"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutoCompleteBox() {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  return (
    <Autocomplete
      // onChange={(event, value: any) => {
      //   dispatch(updateMainSearchBarSymbol(value));
      // }}
      disablePortal
      size="small"
      options={top100Films}
      sx={{
        color: "white",
        bgcolor: "secondary.main",
        borderRadius: "50px",
        // width: 400,
        ".muirtl-bd6idc-MuiInputBase-root-MuiOutlinedInput-root": {
          borderRadius: "20px",
        },
        ".closeText": {
          backgroundColor: "white",
        },

        width: { xs: "200px", sm: "210px", md: "350px", lg: "400px" },
        // display: {  sm: "none",md:"block" },
      }}
      renderInput={(params) => (
        <TextField
          className=""
          color="info"
          sx={{ borderRadius: "50px" }}
          {...params}
          label="جستجوی فیلم"
        />
      )}
    />
  );
}
