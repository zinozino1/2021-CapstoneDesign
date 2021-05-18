import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Divider } from "antd";
import { ResponsiveBar } from "@nivo/bar";

const GuestHistoryDetailWrapper = styled.div`
  .top,
  .bottom {
    display: flex;
  }
  .item {
    flex: 1;
    border: 1px solid violet;
    .divider {
      height: 50px;
    }
    .item-desc {
      height: 200px;
      border: 1px solid red;
      text-align: center;
    }
  }
  .attendance {
    /* line-height: 250px; */
  }
`;

const IsAttendanceWrapper = styled.span`
  ${(props) =>
    props.type === "pass"
      ? css`
          color: blue;
        `
      : css`
          color: red;
        `}
  font-size:3.5rem;
`;

const GuestHistoryDetail = ({ data }) => {
  const [rollData, setRollData] = useState(null);
  const [yawData, setYawData] = useState(null);

  useEffect(() => {
    let tmpRoll = [];
    Object.entries(data.roll).forEach((v, i) => {
      tmpRoll.push({ roll: v[0], val: v[1] });
    });
    setRollData(tmpRoll);

    let tmpYaw = [];
    Object.entries(data.yaw).forEach((v, i) => {
      tmpYaw.push({ roll: v[0], val: v[1] });
    });
    setYawData(tmpYaw);
  }, [data]);

  return (
    <GuestHistoryDetailWrapper>
      <div className="top">
        <div className="item attendance">
          <div className="divider">
            <Divider orientation="left">Attendance</Divider>
          </div>
          <div
            className="item-desc"
            style={{
              height: "100%",
              lineHeight: "200px",
            }}
          >
            {data.isAttendance ? (
              <IsAttendanceWrapper type="pass">PASS</IsAttendanceWrapper>
            ) : (
              <IsAttendanceWrapper type="fail">FAIL</IsAttendanceWrapper>
            )}
          </div>
        </div>
        <div className="item time-line">
          <div className="divider">
            <Divider orientation="left">Timeline Log</Divider>
          </div>
          <div
            className="item-desc"
            style={{
              overflow: "auto",
              border: "1px solid blue",
            }}
          >
            <table border="1px solid #ddd" width="100%">
              <tbody>
                <tr>
                  <th className="th">State</th>
                  <th className="th">Time Log</th>
                </tr>
                {data.timeLineLog.map((v, i) => (
                  <tr key={i}>
                    <td>{v.state}</td>
                    <td>
                      {`${
                        v.timeLog.startTime.hour < 10
                          ? "0" + v.timeLog.startTime.hour
                          : v.timeLog.startTime.hour
                      }:${
                        v.timeLog.startTime.minute < 10
                          ? "0" + v.timeLog.startTime.minute
                          : v.timeLog.startTime.minute
                      }:${
                        v.timeLog.startTime.seconds < 10
                          ? "0" + v.timeLog.startTime.seconds
                          : v.timeLog.startTime.seconds
                      }`}{" "}
                      -{" "}
                      {`${
                        v.timeLog.endTime.hour < 10
                          ? "0" + v.timeLog.endTime.hour
                          : v.timeLog.endTime.hour
                      }:${
                        v.timeLog.endTime.minute < 10
                          ? "0" + v.timeLog.endTime.minute
                          : v.timeLog.endTime.minute
                      }:${
                        v.timeLog.endTime.seconds < 10
                          ? "0" + v.timeLog.endTime.seconds
                          : v.timeLog.endTime.seconds
                      }`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="item roll graph">
          <div className="divider">
            <Divider orientation="left">Roll Graph</Divider>
          </div>
          <div className="item-desc">
            <ResponsiveBar
              style={{ border: "1px solid blue" }}
              data={rollData && rollData}
              keys={["val"]}
              indexBy="roll"
              margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
              padding={0.45}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "paired" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              labelSkipWidth={0}
              labelSkipHeight={0}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              isInteractive={false}
            />
          </div>
        </div>
        <div className="item yaw graph">
          <div className="divider">
            <Divider orientation="left">Yaw Graph</Divider>
          </div>
          <div className="item-desc">
            <ResponsiveBar
              style={{ border: "1px solid blue" }}
              data={yawData && yawData}
              keys={["val"]}
              indexBy="roll"
              margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
              padding={0.45}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "pastel1" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              labelSkipWidth={0}
              labelSkipHeight={0}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              isInteractive={false}
            />
          </div>
        </div>
      </div>
    </GuestHistoryDetailWrapper>
  );
};

export default GuestHistoryDetail;
