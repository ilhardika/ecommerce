import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton>
      <button className="text-sm font-semibold hover:text-darkColor hoverEffect text-lightColor">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
