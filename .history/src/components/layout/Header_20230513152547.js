import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const menuLinks = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/" },
  { title: "Contact", url: "/" },
  { title: "Home", url: "/" },
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
