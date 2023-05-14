import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, non nam iste nemo voluptate quas veniam cumque
              laudantium libero beatae neque temporibus voluptas numquam
              laboriosam inventore iure enim perferendis quo.
            </p>
          </div>
          <div className="banner-image">
            <img srcSet="/banner.png 2x" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
