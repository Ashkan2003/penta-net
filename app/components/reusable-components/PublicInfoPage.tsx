import { SignInButton } from "@clerk/nextjs";
import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const PublicInfoPage = () => {
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
      <Typography>برای دیدن این صفحه لطفا وارد حساب کاربری خود شوید</Typography>
      <Button
        color="success"
        sx={{ marginTop: "30px" }}
        variant="contained"
        size="large"
      >
        {/* this signInButton is the built it component of clerk */}
        <SignInButton>ورود به حساب کاربری</SignInButton>
      </Button>
    </Paper>
  );
};

export default PublicInfoPage;
