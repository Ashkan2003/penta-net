"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button, Skeleton } from "@mui/material";

const AuthState = () => {
  // this useUser is a hook provided by clerk for client components to get the user authState
  const { isLoaded, isSignedIn, user } = useUser();

  // if the user-info is loading so render a skeleton
  if (!isLoaded) {
    return <Skeleton variant="circular" width={40} height={40} />;
  }

  return (
    <>
      {isSignedIn ? (
        // if the user has signed in so show his logo btn
        <UserButton />
      ) : (
        // if the user hasnt signed in so show sign in btn

        <Button color="success" variant="outlined">
          <SignInButton mode="modal">
            <p className="cursor-pointer">ورود/ثبت نام</p>
          </SignInButton>
        </Button>
      )}
    </>
  );
};

export default AuthState;
