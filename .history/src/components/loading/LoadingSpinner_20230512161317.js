import React from "react";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => props.size} solid white;
  border-top: ${(props) => props.borderSize} solid white;
  border-bottom: ${(props) => props.borderSize} solid white;
  border-radius: 100rem;
  display: inline-block;
  animation: spinner 1s infinite linear;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = ({ size = "40px" }) => {
  return <SpinnerStyles></SpinnerStyles>;
};

export default LoadingSpinner;
