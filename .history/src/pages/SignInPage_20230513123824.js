import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Button } from "components/button";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter valid email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 character")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
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

  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="Please enter your email"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Please enter your password"
            control={control}
          >
            {togglePassword ? (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
        <Button
          type="submit"
          style={{ maxWidth: 250, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          SIGN UP
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
