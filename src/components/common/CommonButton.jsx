import React from "react";
import { Button } from "antd";
import styled, { css } from "styled-components";

const StyledButton = styled(Button)`
  background: #aeb0d3;
`;

const CommonButton = ({ content, type = "primary" }) => {
  return <StyledButton type={type}>{content}</StyledButton>;
};

export default CommonButton;
