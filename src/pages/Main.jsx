import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import MainHeader from "../components/main/MainHeader";
import GroupList from "../components/main/GroupList";
import WaitingList from "../components/main/WaitingList";
import RecentTrends from "../components/main/RecentTrends";
import { useDispatch } from "react-redux";

const MainWrapper = styled.div``;

// redux 그룹리스트, 웨이팅리스트, 최근동향 데이터 필요
const Main = () => {
  // 그룹리스트, 웨이팅리스트, 최근 동향  데이터 요청 후 props로 뿌려주기
  const dispatch = useDispatch();

  useEffect(() => {}, []);

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
