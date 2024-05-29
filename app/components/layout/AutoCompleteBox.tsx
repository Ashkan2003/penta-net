"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ListItem, Popper, Stack, Typography } from "@mui/material";
import { useMultiSearchQuery } from "@/app/react-query/search/useMultiSearchQuery";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
export default function AutoCompleteBox() {
  const router = useRouter()
  const { multiSearchData, isPending, mutate } = useMultiSearchQuery();

  const handleSearchQueryChange = (value: any) => {
    mutate(value);
  };

  const handelOptionClick = (option) => {
    option.media_type == "movie" && router.push(`/movie/${option.id}`);
    option.media_type == "tv" && router.push(`/tvSeries/${option.id}`);
    option.media_type == "person" && option.name;
  };
  return (
    <Autocomplete
      getOptionKey={(option) => option.id} // set the movie-id for option-key
      // getOptionLabel={(option) => {
      //   if(option.media_type = "movie")

      // }} // set the movie-name for option-label
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
        <ListItem
          {...props}
          onClick={() => handelOptionClick(option)}
          dir="ltr"
          key={option.id}
        >
          {option.media_type == "movie" && option.title}
          {option.media_type == "tv" && option.name}
          {option.media_type == "person" && option.name}
        </ListItem>
      )}
    />
  );
}
