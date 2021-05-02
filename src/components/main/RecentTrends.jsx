import React, { useState } from "react";
import styled from "styled-components";
import { Divider, Progress, Switch } from "antd";

const RecentTrendsWrapper = styled.div`
  .ant-switch-checked {
    background: #aeb0d3;
  }
`;

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
  const [currentRole, setCurrentRole] = useState(true);

  const onChangeRole = (checked) => {
    setCurrentRole(checked);
  };

  return (
    <RecentTrendsWrapper>
      <Divider orientation="left" style={{ color: "#bbb" }}>
        Recent Trends
      </Divider>

      <div style={{ textAlign: "right", padding: "20px 0" }}>
        <Switch
          checkedChildren="Guest"
          unCheckedChildren="Host"
          defaultChecked
          onChange={onChangeRole}
        />
      </div>

      <RatesWrapper>
        {currentRole === true ? (
          <>
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
          </>
        ) : (
          <>
            <RateItem>
              <Progress
                type="circle"
                percent={10}
                format={(percent) => `${percent}% \n 😵`}
              />
              <RateDesc>Attendance Rate</RateDesc>
            </RateItem>
            <RateItem>
              <Progress type="circle" percent={25} />
              <RateDesc>Concentration Rate</RateDesc>
            </RateItem>
            <RateItem>
              <Progress type="circle" percent={95} />
              <RateDesc>Drowsiness Rate</RateDesc>
            </RateItem>
          </>
        )}
      </RatesWrapper>
    </RecentTrendsWrapper>
  );
};

export default RecentTrends;
