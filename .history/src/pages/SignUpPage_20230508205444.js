import React from "react";
import styled from "styled-components";

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
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form">
          <div className="field">
            <label htmlFor="fullname" className="label">
              Fullname
            </label>
            <input
              type="text"
              className="input"
              placeholder="Please enter your fullname"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
