import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Divider, Progress, Switch } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  loadGuestRecentTrendsRequestAction,
  loadHostRecentTrendsRequestAction,
} from "../../reducers/post";

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
  const dispatch = useDispatch();

  const { guestRecentTrends } = useSelector((state) => state.post);
  const { hostRecentTrends } = useSelector((state) => state.post);

  const [currentRole, setCurrentRole] = useState(true);

  const onChangeRole = (checked) => {
    setCurrentRole(checked);
  };

  useEffect(() => {
    dispatch(loadGuestRecentTrendsRequestAction());
  }, []);

  useEffect(() => {
    dispatch(loadHostRecentTrendsRequestAction());
  }, []);

  if (!guestRecentTrends || !hostRecentTrends) return null;

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
                percent={guestRecentTrends.attendanceRate}
                format={(percent) =>
                  `${
                    percent <= 33 && percent >= 0
                      ? `${percent} % 😵`
                      : percent <= 66 && percent >= 34
                      ? `${percent} % 😐`
                      : `${percent} % 😊`
                  }`
                }
              />
              <RateDesc>Attendance Rate</RateDesc>
            </RateItem>
            <RateItem>
              <Progress
                type="circle"
                percent={guestRecentTrends.concentrationRate}
                format={(percent) =>
                  `${
                    percent <= 33 && percent >= 0
                      ? "Bad.."
                      : percent <= 66 && percent >= 34
                      ? "Normal"
                      : "Good!"
                  }`
                }
              />
              <RateDesc>Concentration Rate</RateDesc>
            </RateItem>
            {/* <RateItem>
              <Progress
                type="circle"
                percent={guestRecentTrends.drowsinessRate}
              />
              <RateDesc>Drowsiness Rate</RateDesc>
            </RateItem> */}
          </>
        ) : (
          <>
            <RateItem>
              <Progress
                type="circle"
                percent={hostRecentTrends.attendanceRate}
                format={(percent) =>
                  `${
                    percent <= 33 && percent >= 0
                      ? `${percent} % 😵`
                      : percent <= 66 && percent >= 34
                      ? `${percent} % 😐`
                      : `${percent} % 😊`
                  }`
                }
              />
              <RateDesc>Attendance Rate</RateDesc>
            </RateItem>
            <RateItem>
              <Progress
                type="circle"
                percent={hostRecentTrends.concentrationRate}
                format={(percent) =>
                  `${
                    percent <= 33 && percent >= 0
                      ? "Bad.."
                      : percent <= 66 && percent >= 34
                      ? "Normal"
                      : "Good!"
                  }`
                }
              />
              <RateDesc>Concentration Rate</RateDesc>
            </RateItem>
            {/* <RateItem>
              <Progress
                type="circle"
                percent={hostRecentTrends.drowsinessRate}
              />
              <RateDesc>Drowsiness Rate</RateDesc>
            </RateItem> */}
          </>
        )}
      </RatesWrapper>
    </RecentTrendsWrapper>
  );
};

export default RecentTrends;
