import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Button } from "components/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";

const schema = yup.object({
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
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

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
          SIGN IN
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
