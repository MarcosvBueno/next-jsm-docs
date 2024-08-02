import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
};

export default SignInPage;
