import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = () => {
  const {} = useController({});
  return (
    <InputStyles>
      <input />
    </InputStyles>
  );
};

export default Input;
