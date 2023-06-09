import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div`
  display: block;
  flex-shrink: 0;
  width: 180px;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const PostImage = ({ url = "", className = "" }) => {
  return (
    <PostImageStyles>
      <img
        src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
      />
    </PostImageStyles>
  );
};

export default PostImage;
