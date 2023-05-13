import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  useEffect(() => {
    if(!userInfo.email)
  }, []);
  return <div></div>;
};

export default SignInPage;
