import React from "react";
import styled from "styled-components";
import { Divider, Progress } from "antd";

const RecentTrendsWrapper = styled.div``;

const RatesWrapper = styled.div`
  display: flex;
`;

const RateItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px 0;
  border: 1px solid red;
`;

const RateDesc = styled.div``;

const RecentTrends = () => {
  return (
    <RecentTrendsWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Recent Trends
      </Divider>
      <div style={{ textAlign: "right", fontSize: "0.7rem" }}>
        <span style={{ color: "red" }}>*</span> Shows the average indicatiors
        for the 10 most recently attended classes.
      </div>
      <RatesWrapper>
        <RateItem>
          <Progress
            type="circle"
            percent={90}
            format={(percent) => `${percent}% \n 😊`}
          />
          <RateDesc>Attendance Rate</RateDesc>
        </RateItem>
        <RateItem>
          <Progress type="circle" percent={45} />
          <RateDesc>Concentration Rate</RateDesc>
        </RateItem>
        <RateItem>
          <Progress type="circle" percent={75} />
          <RateDesc>Drowsiness Rate</RateDesc>
        </RateItem>
      </RatesWrapper>
    </RecentTrendsWrapper>
  );
};

export default RecentTrends;
