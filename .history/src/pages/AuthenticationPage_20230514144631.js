import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 80px;
    background-image: linear-gradient(to right bottom, #2ebac1, #a4d96c);
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
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
  .have-account {
    margin-bottom: 20px;
    text-align: center;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
    }
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <NavLink to="/">
          <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        </NavLink>
        <h1 className="heading">Monkey Blogging</h1>
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
