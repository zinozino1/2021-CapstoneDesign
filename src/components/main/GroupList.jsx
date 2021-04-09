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
    classRoomName: "AI Capstone design",
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
    classRoomName: "Domain analysis",
    classRoomCode: "b09333#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "Database",
    classRoomCode: "12dj9f3#@",
    status: "off",
    role: "HOST",
  },
  {
    classRoomName: "Machine learning",
    classRoomCode: "af3f23#@",
    status: "on",
    role: "GUEST",
  },
  {
    classRoomName: "asdf",
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
];

const GroupList = () => {
  return (
    <GroupListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Group List
      </Divider>
      <ListWrapper>
        {/* <MainListIndex /> */}
        <MainList data={dummy} />
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
