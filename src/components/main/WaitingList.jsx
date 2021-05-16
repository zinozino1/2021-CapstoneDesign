import React, { useEffect } from "react";
import styled from "styled-components";
import { Divider } from "antd";
import MainList from "../common/MainList";
import { waitingList } from "../../libs/util/dummyCreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadWaitingListRequestAction } from "../../reducers/post";
import { Spin } from "antd";

const WaitingListWrapper = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const ListWrapper = styled.div`
  border: 1px solid black;
  height: 250px;
  position: relative;
`;

const Skeleton = styled.div`
  height: 250px;
  text-align: center;
  line-height: 250px;
`;

const WaitingList = () => {
  const dispatch = useDispatch();
  const { waitingList } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadWaitingListRequestAction());
  }, []);

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
          <MainList data={waitingList} type="waiting" />
        )}
      </ListWrapper>
    </WaitingListWrapper>
  );
};

export default WaitingList;
