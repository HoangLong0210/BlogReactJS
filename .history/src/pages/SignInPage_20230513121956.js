import { useAuth } from "contexts/auth-context";
import React from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  return <div></div>;
};

export default SignInPage;
