"use client";
import { useUser } from "@clerk/nextjs";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import { InputAdornment, Paper, Stack, TextField } from "@mui/material";
import FullPageLoading from "../components/reusable-components/FullPageLoadingSpinner";
import PublicInfoPage from "../components/reusable-components/PublicInfoPage";

const UserProfile = () => {
  // get current user info from clerk
  const currentUser = useUser();

  console.log(currentUser);

  // wait until the user load
  if (!currentUser.isLoaded) {
    return <FullPageLoading />;
  }

  // if the user doesnt signedup so dont show this page instead show this
  if (!currentUser.isSignedIn) {
    return <PublicInfoPage />;
  }

  return (
    <Paper
      elevation={3}
      sx={{ bgcolor: "secondary.dark", margin: "1rem", height: "50vh" }}
    >
      <Stack
        direction="row"
        gap={3}
        padding={3}
        flexWrap="wrap"
        borderRadius="30px"
      >
        <TextField
          value={currentUser.user?.username}
          color="success"
          label="نام کاربری"
          sx={{ width: "50%", bgcolor: "secondary.main" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="success" />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
        <TextField
          value={currentUser.user?.primaryEmailAddress?.emailAddress}
          color="success"
          label="آدرس ایمیل"
          sx={{ width: "50%", bgcolor: "secondary.main" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="success" />
              </InputAdornment>
            ),
          }}
          variant="filled"
        />
      </Stack>
    </Paper>
  );
};

export default UserProfile;
