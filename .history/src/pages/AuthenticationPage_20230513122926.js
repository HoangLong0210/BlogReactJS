import React from "react";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
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

const AuthenticationPage = () => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
      </div>
      {children}
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
