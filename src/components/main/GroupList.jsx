import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider, Pagination } from "antd";
import MainList from "../common/MainList";
import MainListIndex from "../common/MainListIndex";
import { groupList } from "../../libs/util/dummyCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  loadGroupListRequestAction,
  loadIntervalGroupList,
} from "../../reducers/post";
import { Spin } from "antd";

const GroupListWrapper = styled.div`
  flex: 1;
`;

const ListWrapper = styled.div`
  border: 1px solid #ddd;
  height: 300px;
  position: relative;
`;

const Skeleton = styled.div`
  height: 300px;
  text-align: center;
  line-height: 300px;
`;

const GroupList = () => {
  const dispatch = useDispatch();
  const { groupList } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me) {
      dispatch(loadGroupListRequestAction(me.data.userId));
    }
  }, [me]);

  useEffect(() => {
    let loadGroupListInterval;

    if (me) {
      loadGroupListInterval = setInterval(() => {
        console.log("그룹리스트 업데이트..");
        dispatch(loadIntervalGroupList(me.data.userId));
      }, 2500);
    }

    return () => {
      clearInterval(loadGroupListInterval);
    };
  }, [me]);

  return (
    <GroupListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Group List
      </Divider>
      <ListWrapper>
        {!groupList ? (
          <Skeleton>
            <Spin></Spin>
          </Skeleton>
        ) : (
          <MainList data={groupList.data} type="group" />
        )}
      </ListWrapper>
    </GroupListWrapper>
  );
};

export default GroupList;
