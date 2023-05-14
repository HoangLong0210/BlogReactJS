import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
  background-image: linear-gradient(to right bottom, ${props => props.theme.primary, ${props => props.theme.secondary});
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque
        enim vitae. Temporibus nesciunt tempore labore iste nihil impedit magni
        sit soluta necessitatibus a. Quia, ab? Unde voluptate quibusdam
        delectus!
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
