import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import MainList from "../common/MainList";
import { waitingList } from "../../libs/util/dummyCreator";

const WaitingListWrapper = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  position: relative;
`;

const WaitingList = () => {
  return (
    <WaitingListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Waiting List
      </Divider>
      <ListWrapper>
        <MainList data={waitingList(10)} type="waiting" />
      </ListWrapper>
    </WaitingListWrapper>
  );
};

export default WaitingList;
