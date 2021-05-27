import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  /* margin: 0 auto; */
  /* margin-top: 30vh; */
  width: 900px;
  ${(props) =>
    props.type === "login" &&
    css`
      width: 600px;
    `}

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

const AuthLayout = ({ children, type }) => {
  return (
    <Container>
      <ContentWrapper type={type}>{children}</ContentWrapper>
    </Container>
  );
};

export default AuthLayout;
