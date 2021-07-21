import React from "react";
import styled from "styled-components";

/**
 * @author 박진호
 * @version 1.0
 * @summary 메인 화면 리스트 인덱싱 컴포넌트
 */

const MainListIndexWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  font-weight: bold;
  background: #aeb0d3;
  color: #fff;
`;

const IndexItem = styled.div`
  flex: 1;
  text-align: center;
`;

const MainListIndex = ({ type }) => {
  return (
    <MainListIndexWrapper>
      <IndexItem>Group Name</IndexItem>
      {type === "group" && <IndexItem>Enter Code</IndexItem>}
      <IndexItem>Status</IndexItem>
      {type === "group" && <IndexItem>Role</IndexItem>}
    </MainListIndexWrapper>
  );
};

export default MainListIndex;
