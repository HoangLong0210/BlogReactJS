import React from "react";
import styled from "styled-components";

const InputStyles = styled.div``;

const Input = () => {
  return (
    <InputStyles>
      <input
        type="text"
        id="fullname"
        className="input"
        placeholder="Please enter your fullname"
      />
    </InputStyles>
  );
};

export default Input;
