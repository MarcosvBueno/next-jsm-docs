import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="auth-page">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
