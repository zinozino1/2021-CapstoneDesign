import React from "react";
import styled from "styled-components";

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

const MainListIndex = () => {
  return (
    <MainListIndexWrapper>
      <IndexItem>Class Room Name</IndexItem>
      <IndexItem>Class Room Code</IndexItem>
      <IndexItem>Status</IndexItem>
      <IndexItem>Role</IndexItem>
    </MainListIndexWrapper>
  );
};

export default MainListIndex;
