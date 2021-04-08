import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import MainHeader from "../components/main/MainHeader";
import GroupList from "../components/main/GroupList";
import WaitingList from "../components/main/WaitingList";
import RecentTrends from "../components/main/RecentTrends";

const MainWrapper = styled.div``;

const Main = () => {
  return (
    <ContentLayout>
      <MainWrapper>
        <MainHeader />
        <div style={{ display: "flex" }}>
          <GroupList />
          <WaitingList />
        </div>
        <RecentTrends />
      </MainWrapper>
    </ContentLayout>
  );
};

export default Main;
