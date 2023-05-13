import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
`;

const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      <h2>Monkey Blogging</h2>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
