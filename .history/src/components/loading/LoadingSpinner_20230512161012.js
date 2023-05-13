import React from "react";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const LoadingSpinner = () => {
  return <div></div>;
};

export default LoadingSpinner;
