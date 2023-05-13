import { LoadingSpinner } from "components/loading";
import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 0 20px;
  line-height: 1;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "")
    return (
      <ButtonStyles type={type} onClick={onClick} {...props}>
        {child}
      </ButtonStyles>
    );
};

Button.propTypes = {
  type: PropsType.oneOf(["button", "submit"]).isRequired,
  isLoading: PropsType.bool,
  onClick: PropsType.func,
  children: PropsType.node,
};

export default Button;
