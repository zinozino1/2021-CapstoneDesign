import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const GuestHistoryDetailWrapper = styled.div`
  .top,
  .bottom {
    display: flex;
  }
  .item {
    flex: 1;
  }
`;

const GuestHistoryDetail = ({ data }) => {
  return (
    <GuestHistoryDetailWrapper>
      <div className="top">
        <div className="item attendance">
          <Divider orientation="left">Attendance</Divider>
        </div>
        <div className="item time-line">
          <Divider orientation="left">Timeline Log</Divider>
        </div>
      </div>
      <div className="bottom">
        <div className="item roll graph">
          <Divider orientation="left">Roll Graph</Divider>
        </div>
        <div className="item yaw graph">
          <Divider orientation="left">Yaw Graph</Divider>
        </div>
      </div>
    </GuestHistoryDetailWrapper>
  );
};

export default GuestHistoryDetail;
