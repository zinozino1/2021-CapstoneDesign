import React from "react";
import styled, { css } from "styled-components";

/**
 * @author 박진호
 * @version 1.0
 * @summary 인증화면 레이아웃
 */

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 900px;
  ${(props) =>
    props.type === "login" &&
    css`
      width: 600px;
    `}
  border-radius: 5px;
  background-color: #f1f2f5;
`;

const AuthLayout = ({ children, type }) => {
  return (
    <Container>
      <ContentWrapper type={type}>{children}</ContentWrapper>
    </Container>
  );
};

export default AuthLayout;
