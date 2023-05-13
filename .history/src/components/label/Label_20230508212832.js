import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.colorDark};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const Label = ({ htmlFor = "", childred, ...props }) => {
  return <LabelStyles htmlFor={htmlFor}></LabelStyles>;
};

export default Label;
