import { Button } from "components/button";
import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-content {
    max-width: 400px;
    color: white;
  }
  &-heading {
    font-size: 36px;
    margin-bottom: 20px;
  }
  &-desc {
    line-height: 1.75;
    margin-bottom: 40px;
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, non nam iste nemo voluptate quas veniam cumque
              laudantium libero beatae neque temporibus voluptas numquam
              laboriosam inventore iure enim perferendis quo.
            </p>
            <Button to="/sign-up" kind="secondary">
              Get started
            </Button>
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
