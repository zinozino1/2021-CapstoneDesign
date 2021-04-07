import React from "react";
import styled from "styled-components";
import { Divider, Pagination } from "antd";
import MainList from "../common/MainList";

const GroupListWrapper = styled.div``;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const dummy = [
  {
    classRoomName: "AI capstone",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "Data structure",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "Algorithm",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "AI capstone",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "Data structure",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "Algorithm",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "AI capstone",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
];

const GroupList = () => {
  return (
    <GroupListWrapper>
      <Divider orientation="left" style={{ color: "#ddd" }}>
        GroupList
      </Divider>
      <ListWrapper>
        <MainList data={dummy} />
        <Pagination defaultCurrent={1} total={30} pageSize={5}></Pagination>
      </ListWrapper>
    </GroupListWrapper>
  );
};

export default GroupList;
