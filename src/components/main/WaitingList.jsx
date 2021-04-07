import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const WaitingListWrapper = styled.div``;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const WaitingList = () => {
  return (
    <WaitingListWrapper>
      <Divider orientation="left">WaitingList</Divider>
      <ListWrapper></ListWrapper>
    </WaitingListWrapper>
  );
};

export default WaitingList;
