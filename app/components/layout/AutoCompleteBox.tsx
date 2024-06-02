"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, ListItem, Popper, Stack, Typography } from "@mui/material";
import { useMultiSearchQuery } from "@/app/react-query/search/useMultiSearchQuery";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

// in this component the option is the (tv or movie or person)-details.
export default function AutoCompleteBox() {
  const router = useRouter();
  const { multiSearchData, isPending, mutate } = useMultiSearchQuery();
  // when the input value change mutate(reFetch the mutaition-fn with the new input-value)
  // so when the user changes the input-value,he will see new options
  const handleSearchQueryChange = (value: any) => {
    mutate(value);
  };

  // when the user click on a option,depent on its media-type,navigate to the ditais page
  const handelOptionClick = (option: any) => {
    option.media_type == "movie" && router.push(`/movie/${option.id}`);
    option.media_type == "tv" && router.push(`/tvSeries/${option.id}`);
  };
  return (
    <Autocomplete
      getOptionKey={(option: any) => option.id} // set the movie-id for option-key
      freeSolo
      filterOptions={(option) => option}
      options={multiSearchData == undefined ? [] : multiSearchData}
      noOptionsText="موردی یافت نشد"
      size="small"
      classes={{
        listbox: "bg-teal-800",
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
      renderOption={(props, option: any) => (
        <div
          // {...props}
          className="px-2 py-1 cursor-pointer"
          dir="ltr"
          onClick={() => handelOptionClick(option)}
          key={option.id}
        >
          {option.media_type == "movie" && option.title}
          {option.media_type == "tv" && option.name}
        </div>
      )}
    />
  );
}
