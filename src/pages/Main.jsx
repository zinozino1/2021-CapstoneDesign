import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import MainHeader from "../components/main/MainHeader";
import GroupList from "../components/main/GroupList";
import WaitingList from "../components/main/WaitingList";
import RecentTrends from "../components/main/RecentTrends";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  initializeGroupAndWaitingList,
  loadIntervalGroupList,
} from "../reducers/post";

const MainWrapper = styled.div``;

// redux 그룹리스트, 웨이팅리스트, 최근동향 데이터 필요
const Main = ({ history }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    return () => {
      dispatch(initializeGroupAndWaitingList());
    };
  }, []);

  // useEffect(() => {
  //   let loadGroupListInterval;

  //   if (me) {
  //     loadGroupListInterval = setInterval(() => {
  //       dispatch(loadIntervalGroupList(me.data.userId));
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(loadGroupListInterval);
  //   };
  // }, [me]);

  if (!me) {
    history.push("/");
  }

  return (
    <ContentLayout>
      <MainWrapper>
        <MainHeader />
        <div style={{ display: "flex" }}>
          <GroupList />
          <WaitingList />
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: "0.7rem",
            color: "#bbb",
            padding: "10px 0",
          }}
        >
          <span style={{ color: "red" }}>*</span> This is the admission queue. A
          notification will be sent upon rejection.
        </div>
        <RecentTrends />
      </MainWrapper>
    </ContentLayout>
  );
};

export default Main;
