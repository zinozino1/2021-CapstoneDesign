import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 65px;
  width: 400px;
  border-radius: 5px;
  background-color: #f1f2f5;
  /* ${(props) =>
    props.type === "register"
      ? css`
          width: 600px;
          @media (max-width: 768px) {
            width: 80%;
          }
        `
      : css`
          width: 400px;
        `} */
`;

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default AuthLayout;
