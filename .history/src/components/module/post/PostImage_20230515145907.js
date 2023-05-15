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

const PostImage = ({ url = "", className = "", alt = "" }) => {
  return (
    <PostImageStyles className={className}>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageStyles>
  );
};

export default PostImage;
