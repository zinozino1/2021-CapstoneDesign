import React from "react";
import styled from "styled-components";
import { Divider } from "antd";

const RecentTrendsWrapper = styled.div``;

const RecentTrends = () => {
  return (
    <RecentTrendsWrapper>
      <Divider orientation="left" style={{ color: "#ddd" }}>
        Recent Trends
      </Divider>
    </RecentTrendsWrapper>
  );
};

export default RecentTrends;
