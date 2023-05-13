import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/">
        <img srcSet="logo.png 2x" alt="monkey-blogging" className="logo" />
      </NavLink>
      <h1 className="heading">Error 404: Page not found!</h1>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;