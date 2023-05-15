import React from "react";
import styled from "styled-components";

const PostTitleStyles = styled.div``;

const PostTitle = ({ children, className = "" }) => {
  return (
    <PostTitleStyles className={`post-title ${className}`}>
      {children}
    </PostTitleStyles>
  );
};

export default PostTitle;
