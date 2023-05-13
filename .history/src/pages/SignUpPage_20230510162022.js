import React, { Children } from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { IconEyeClose } from "components/icon";

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
  .field {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: start;
  }
  .label {
    color: ${(props) => props.theme.colorDark};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.colorLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2 linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="field">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Please enter your fullname"
              control={control}
            >
              <IconEyeClose classname="input-icon"></IconEyeClose>
            </Input>
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
