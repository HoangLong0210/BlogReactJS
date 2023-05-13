import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!userInfo.email) navigate("/sign-up");
  //     else navigate("/");
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}></form>
    </AuthenticationPage>
  );
};

export default SignInPage;
