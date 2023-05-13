import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.email) navigate("/sign-up");
    else navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default SignInPage;
