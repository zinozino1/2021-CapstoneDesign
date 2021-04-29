import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import MainList from "../common/MainList";

const WaitingListWrapper = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  position: relative;
`;

const dummy = [
  {
    classRoomName: "1",
    classRoomCode: "12dj9f3#@",
    status: "Waiting...",
    role: "HOST",
  },
  {
    classRoomName: "2",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "3",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "4",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "5",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "6",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "7",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "8",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "9",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "10",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "11",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "9",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "10",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "11",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "9",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "10",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "11",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
];

const WaitingList = () => {
  return (
    <WaitingListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Waiting List
      </Divider>
      <ListWrapper>
        <MainList data={dummy} type="waiting" />
      </ListWrapper>
    </WaitingListWrapper>
  );
};

export default WaitingList;
