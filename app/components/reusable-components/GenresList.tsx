import { Chip, Stack, Typography } from "@mui/material";

interface Props {
  genres: { id: number; name: string }[];
}

const GenresList = ({ genres }: Props) => {
  return (
    <Stack flexWrap="wrap" direction="row" alignItems="center" gap={1} >
      <Typography>ژانرها</Typography>
      {genres.map((genre) => (
        <Chip label={genre.name} key={genre.id} clickable color="error" />
      ))}
    </Stack>
  );
};

export default GenresList;
