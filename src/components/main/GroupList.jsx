import React from "react";
import styled from "styled-components";
import { Divider, Pagination } from "antd";
import MainList from "../common/MainList";
import MainListIndex from "../common/MainListIndex";
import { groupList } from "../../libs/util/dummyCreator";

const GroupListWrapper = styled.div`
  flex: 1;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  position: relative;
`;

const GroupList = () => {
  return (
    <GroupListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Group List
      </Divider>
      <ListWrapper>
        {/* <MainListIndex /> */}
        <MainList data={groupList(30)} type="group" />
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
