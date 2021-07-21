import React from "react";
import styled from "styled-components";
import Nav from "../common/Nav";

/**
 * @author 박진호
 * @version 1.0
 * @summary 컨텐트화면 레이아웃
 */

const ContentWrapper = styled.div`
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
