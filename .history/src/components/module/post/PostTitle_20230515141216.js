import React from "react";
import styled, { css } from "styled-components";

const PostTitleStyles = styled.h3`
  font-weight: bold;
  line-height: 1.5;
  display: block;
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
    `};
  ${(props) => props.size === "small" && css``};
  font-size: 16px;
`;

const PostTitle = ({ children, className = "", size = "normal" }) => {
  return (
    <PostTitleStyles size={size} className={`post-title ${className}`}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
