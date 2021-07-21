import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";
import MainList from "../common/MainList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  loadGroupListRequestAction,
  loadIntervalGroupList,
} from "../../reducers/post";
import { Spin } from "antd";

/**
 * @author 박진호
 * @version 1.0
 * @summary 그룹 리스트 렌더링 컴포넌트
 */

const GroupListWrapper = styled.div`
  flex: 1;
  @media (max-width: 1368px) {
    font-size: 12px;
  }
`;

const ListWrapper = styled.div`
  border: 1px solid #ddd;
  height: 300px;
  @media (max-width: 1368px) {
    height: 180px;
  }
  position: relative;
`;

const Skeleton = styled.div`
  height: 300px;
  @media (max-width: 1368px) {
    height: 180px;
  }
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
