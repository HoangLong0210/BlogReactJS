import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  .header-main {
    display: flex;
    align-items: center;
  }
  .logo {
    display: block;
    max-width: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
  }
`;

const menuLinks = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/" },
  { title: "Contact", url: "/" },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <a href="/">
            <img srcSet="logo.png 2x" alt="mongkey-blogging" className="logo" />
          </a>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
