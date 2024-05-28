"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Popper, Stack, Typography } from "@mui/material";
import { useMultiSearchQuery } from "@/app/react-query/search/useMultiSearchQuery";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function AutoCompleteBox() {
  const { multiSearchData, isPending, mutate } = useMultiSearchQuery();
  if (isPending) {
  }

  const handleSearchQueryChange = (value: any) => {
    mutate(value);
  };

  return (
    <Autocomplete
      getOptionKey={(option) => option.id} // set the movie-id for option-key
      getOptionLabel={(option) => option.name} // set the movie-name for option-label
      freeSolo
      filterOptions={(option) => option}
      options={multiSearchData == undefined ? [] : multiSearchData}
      size="small"
      classes={{
        listbox: "bg-black",
      }}
      sx={{
        bgcolor: "secondary.main",
        borderRadius: "50px",
        ".MuiAutocomplete-inputRoot": {
          borderRadius: "50px",
        },
        width: { xs: "200px", sm: "210px", md: "350px", lg: "400px" },
      }}
      renderInput={(params) => (
        <TextField
          color="info"
          {...params}
          label={
            <div className="flex">
              <SearchIcon sx={{ color: "success.main", marginRight: "3px" }} />
              <Typography>جستجوی فیلم و سریال</Typography>
            </div>
          }
          onChange={(event: any) => {
            handleSearchQueryChange(event.target.value);
          }}
        />
      )}
    />
  );
  // return (
  //   <input
  //     value={searchQuery}
  //     className="w-96 text-black"
  //     onChange={handleSearchQueryChange}
  //   />
  // );
  // return (
  //   <Autocomplete
  //     filterOptions={(x) => x}
  //     getOptionKey={(option) => option.id} // set the movie-id for option-key
  //     getOptionLabel={(option) => option.name} // set the movie-name for option-label
  //     disabled={!isPending}
  //     freeSolo
  //     onChange={(event, value: any) => {
  //       console.log(value, "sddsd");
  //       handleSearchQueryChange;
  //       // setSearchQuery();
  //     }}
  //     disablePortal
  //     size="small"
  //     classes={{
  //       listbox: "bg-slate-950",
  //     }}
  //     open
  //     options={multiSearchData}
  //     sx={{
  //       bgcolor: "secondary.main",
  //       borderRadius: "50px",
  //       ".MuiAutocomplete-inputRoot": {
  //         borderRadius: "50px",
  //       },
  //       width: { xs: "200px", sm: "210px", md: "350px", lg: "400px" },
  //     }}
  //     renderInput={(params) => (
  //       <TextField color="info" {...params} label="جستجوی فیلم و سریال" />
  //     )}
  //   />
  // );
}
