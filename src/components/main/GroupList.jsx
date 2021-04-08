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
    classRoomName: "1",
    classRoomCode: "12dj9f3#@",
    status: "off",
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
