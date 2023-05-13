import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  useEffect(() => {}, []);
  return <div></div>;
};

export default SignInPage;
