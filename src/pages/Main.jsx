import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import MainHeader from "../components/main/MainHeader";
import GroupList from "../components/main/GroupList";
import WaitingList from "../components/main/WaitingList";
import RecentTrends from "../components/main/RecentTrends";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initializeGroupAndWaitingList } from "../reducers/post";

/**
 * @author 박진호
 * @version 1.0
 * @summary 메인 페이지
 */

const MainWrapper = styled.div`
  .list-wrapper {
    display: flex;
    @media (max-width: 1368px) {
      flex-direction: column;
    }
  }
`;

const Main = ({ history }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    return () => {
      dispatch(initializeGroupAndWaitingList());
    };
  }, []);

  if (!me) {
    history.push("/");
  }

  return (
    <ContentLayout>
      <MainWrapper>
        <MainHeader />
        <div className="list-wrapper">
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
