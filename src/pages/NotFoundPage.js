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
    margin-bottom: 20px;
  }
  .heading {
    font-weight: 600px;
    font-size: 60px;
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(
      to right bottom,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    border-radius: 12px;
    font-weight: 500;
    text-decoration: none;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
      </NavLink>
      <h1 className="heading">Oops! Page not found!</h1>
      <NavLink to="/" className="back">
        Back to home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
