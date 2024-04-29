import { Chip, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  genres: { id: number; name: string }[];
}

const MovieGenres = ({ genres }: Props) => {
  return (
    <Stack flexWrap="wrap" direction="row" alignItems="center" spacing={1}>
      <Typography>ژانرها</Typography>
      {genres.map((genre) => (
        <Chip label={genre.name} key={genre.id} clickable color="error" />
      ))}
    </Stack>
  );
};

export default MovieGenres;
