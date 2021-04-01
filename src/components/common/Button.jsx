import React from "react";
import { Button as AntButton } from "antd";
import styled, { css } from "styled-components";

const StyledButton = styled(AntButton)`
  background: #aeb0d3;
  border: 1px solid #aeb0d3;
  ${(props) =>
    props.type === "text" &&
    css`
      background: #fff;
      border: none;
    `}
`;

const Button = ({ content, type = "primary" }) => {
  return <StyledButton type={type}>{content}</StyledButton>;
};

export default Button;
