import { Paper, Typography } from "@mui/material";

const UnderConstructionPage = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: "center",
        bgcolor: "secondary.dark",
        margin: "1rem",
        padding: "50px",
      }}
    >
      <Typography>این صفحه در دست ساخت .</Typography>
    </Paper>
  );
};

export default UnderConstructionPage;
