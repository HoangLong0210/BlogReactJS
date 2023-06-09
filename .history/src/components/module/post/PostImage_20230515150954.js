import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImage = ({ url = "", className = "", alt = "", to = null }) => {
  if (to)
    return (
      <PostImageStyles className={`post-image ${className}`}>
        <img src={url} alt={alt} loading="lazy" />
      </PostImageStyles>
    );
};

export default PostImage;
