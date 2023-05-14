import React from "react";
import styled from "styled-components";
const HeadingStyles = styled.h2`
  color: ${(props) => props.theme.tertiary};
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  &:before {
    content: "";
    width: 50px;
    height: 4px;
    background-image: linear-gradient(to right bottom, #2ebac1, #a4d96c);
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }
`;
const Heading = ({ className = "", children }) => {
  return <HeadingStyles className={className}>{children}</HeadingStyles>;
};

export default Heading;
