import React from "react";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.size};
  border-top: ${(props) => props.borderSize} solid white;
`;

const LoadingSpinner = () => {
  return <div></div>;
};

export default LoadingSpinner;
