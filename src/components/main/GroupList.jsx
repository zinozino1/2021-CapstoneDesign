import React from "react";
import styled from "styled-components";
import { Divider, Pagination } from "antd";
import MainList from "../common/MainList";
import MainListIndex from "../common/MainListIndex";

const GroupListWrapper = styled.div`
  flex: 1;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  position: relative;
`;

const dummy = [
  {
    id: "1",
    classRoomName: "AI Capstone design",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "2",
    classRoomName: "Data structure",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    id: "3",
    classRoomName: "Domain analysis",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "4",
    classRoomName: "Database",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "5",
    classRoomName: "Machine learning",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    id: "6",
    classRoomName: "asdf",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "7",
    classRoomName: "7",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "8",
    classRoomName: "8",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    id: "9",
    classRoomName: "9",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "10",
    classRoomName: "10",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    id: "11",
    classRoomName: "11",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
];

const GroupList = () => {
  return (
    <GroupListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Group List
      </Divider>
      <ListWrapper>
        {/* <MainListIndex /> */}
        <MainList data={dummy} type="group" />
        {/* <Pagination
          defaultCurrent={1}
          total={dummy.length}
          pageSize={5}
        ></Pagination> */}
      </ListWrapper>
    </GroupListWrapper>
  );
};

export default GroupList;
