import React from "react";
import styled from "styled-components";

const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: start;
  margin-bottom: 40px;
`;

const Field = ({ children }) => {
  return <FieldStyles></FieldStyles>;
};

export default Field;
