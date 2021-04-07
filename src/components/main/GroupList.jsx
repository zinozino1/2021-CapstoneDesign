import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const GroupListWrapper = styled.div``;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const GroupList = () => {
  return (
    <GroupListWrapper>
      <Divider orientation="left">GroupList</Divider>
      <ListWrapper></ListWrapper>
    </GroupListWrapper>
  );
};

export default GroupList;
