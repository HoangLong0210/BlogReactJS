import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const menuLinks = [
  { titile: "Home", url: "/" },
  { id: , name: "Home", url: "/" },
  { id: 1, name: "Home", url: "/" },
  { id: 1, name: "Home", url: "/" },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="logo.png 2x" alt="mongkey-blogging" />
          </a>
          <ul className="menu"></ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
