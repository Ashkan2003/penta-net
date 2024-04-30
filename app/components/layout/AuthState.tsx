"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const AuthState = () => {
    // this useUser is a hook provided by clerk for client components to get the user authState
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <>
      {isSignedIn && isLoaded ? (
        <UserButton />
      ) : (
        <SignInButton>
          <p className="cursor-pointer">ورود/ثبت نام</p>
        </SignInButton>
      )}
    </>
  );
};

export default AuthState;
