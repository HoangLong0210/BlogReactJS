import styled from "styled-components";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { useEffect, useState } from "react";
import { Button } from "components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 80px;
  }

  .label {
    color: ${(props) => props.theme.colorDark};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

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

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const handleSignUp = async (values) => {
    console.log(values);
    if (!isValid) return;

    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, { displayName: values.fullname });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      name: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully!!!");
    navigate("/");
  };
  const [togglePassword, setTogglePassword] = useState(false);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Please enter your fullname"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Please enter your email address"
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
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
