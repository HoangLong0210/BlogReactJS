import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.div`
  font-weight: bold;
  line-height: 1.5;
  display: block;
`;

const PostTitle = ({ children, className = "" }) => {
  return (
    <PostTitleStyles className={`post-title ${className}`}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
