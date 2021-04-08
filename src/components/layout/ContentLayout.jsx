import React from "react";
import styled from "styled-components";
import Nav from "../common/Nav";

const ContentWrapper = styled.div`
  border: 1px solid blue;
  margin-left: 200px;
  padding: 30px 80px;
`;

const ContentLayout = ({ children }) => {
  return (
    <>
      <Nav></Nav>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default ContentLayout;
