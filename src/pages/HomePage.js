import Layout from "components/layout/Layout";
import HomeBanner from "components/module/home/HomeBanner";
import HomeFeature from "components/module/home/HomeFeature";
import HomeNewest from "components/module/home/HomeNewest";
import React, { useEffect } from "react";
import styled from "styled-components";

const HomePageStyles = styled.div``;

const HomePage = () => {
  useEffect(() => {
    document.title = "MONKEY BLOGGING";
  }, []);
  return (
    <HomePageStyles>
      <Layout>
        <HomeBanner></HomeBanner>
        <HomeFeature></HomeFeature>
        <HomeNewest></HomeNewest>
      </Layout>
    </HomePageStyles>
  );
};

export default HomePage;
