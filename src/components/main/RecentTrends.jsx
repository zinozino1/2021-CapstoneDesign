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
  border: 1px solid #ddd;
`;

const RateItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px 0;
`;

const RateDesc = styled.div``;

const RecentTrends = () => {
  const dispatch = useDispatch();

  const { guestRecentTrends } = useSelector((state) => state.post);
  const { hostRecentTrends } = useSelector((state) => state.post);

  const { me } = useSelector((state) => state.user);

  const [currentRole, setCurrentRole] = useState(true);

  const onChangeRole = (checked) => {
    setCurrentRole(checked);
  };

  useEffect(() => {
    dispatch(loadGuestRecentTrendsRequestAction(me.data.userId));
  }, [me]);

  useEffect(() => {
    dispatch(loadHostRecentTrendsRequestAction(me.data.userId));
  }, [me]);

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
      <div
        style={{
          textAlign: "right",
          fontSize: "0.7rem",
          color: "#bbb",
          padding: "10px 0",
        }}
      >
        <span style={{ color: "red" }}>*</span> Shows the average Trends for the
        last 10 classes.
      </div>
    </RecentTrendsWrapper>
  );
};

export default RecentTrends;
