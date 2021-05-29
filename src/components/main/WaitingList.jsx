import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";
import MainList from "../common/MainList";
import { waitingList } from "../../libs/util/dummyCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  loadWaitingListRequestAction,
  loadIntervalWaitingList,
} from "../../reducers/post";
import { Spin } from "antd";

const WaitingListWrapper = styled.div`
  flex: 1;
  margin-left: 30px;
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

const WaitingList = () => {
  const dispatch = useDispatch();
  const { waitingList } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (me) {
      dispatch(loadWaitingListRequestAction(me.data.userId));
    }
  }, [me]);

  useEffect(() => {
    let loadGroupListInterval;

    if (me) {
      loadGroupListInterval = setInterval(() => {
        dispatch(loadIntervalWaitingList(me.data.userId));
      }, 1000);
    }

    return () => {
      clearInterval(loadGroupListInterval);
    };
  }, [me]);

  return (
    <WaitingListWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Waiting List
      </Divider>
      <ListWrapper>
        {!waitingList ? (
          <Skeleton>
            <Spin></Spin>
          </Skeleton>
        ) : (
          <MainList data={waitingList.data} type="waiting" />
        )}
      </ListWrapper>
    </WaitingListWrapper>
  );
};

export default WaitingList;
