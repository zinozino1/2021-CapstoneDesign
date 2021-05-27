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
    /* border: 1px solid violet; */
    .divider {
      height: 50px;
    }
    .item-desc {
      height: 200px;
      /* border: 1px solid red; */
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
  font-size:4rem;
`;

const GuestHistoryDetail = ({ data }) => {
  const [pitchData, setRollData] = useState(null);
  const [yawData, setYawData] = useState(null);

  useEffect(() => {
    let tmpPitch = [];
    // Object.entries(data.roll).forEach((v, i) => {
    //   tmpPitch.push({ roll: v[0], val: v[1] });
    // });
    tmpPitch.push({ roll: "Pitch Up", val: data.pitch.pitchUp });
    tmpPitch.push({
      roll: "Pitch Normal",
      val: data.pitch.pitchNormal,
    });
    tmpPitch.push({ roll: "Pitch Down", val: data.pitch.pitchDown });

    setRollData(tmpPitch);

    let tmpYaw = [];
    // Object.entries(data.yaw).forEach((v, i) => {
    //   tmpYaw.push({ roll: v[0], val: v[1] });
    // });
    tmpYaw.push({ roll: "Yaw Left", val: data.yaw.yawLeft });
    tmpYaw.push({ roll: "Yaw Normal", val: data.yaw.yawNormal });
    tmpYaw.push({ roll: "Yaw Right", val: data.yaw.yawRight });
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
            {data.attend ? (
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
              border: "1px solid #ddd",
            }}
          >
            <table width="100%">
              <tbody>
                <tr style={{ borderBottom: "1px solid #ddd" }}>
                  <th className="th">State</th>
                  <th className="th">Time Log</th>
                </tr>
                {data.timeLineLog &&
                  data.timeLineLog.map((v, i) => (
                    <tr key={i}>
                      <td>{v.state}</td>
                      <td>
                        {`${
                          v.startHour < 10 ? "0" + v.startHour : v.startHour
                        }:${
                          v.startMinute < 10
                            ? "0" + v.startMinute
                            : v.startMinute
                        }:${
                          v.startSeconds < 10
                            ? "0" + v.startSeconds
                            : v.startSeconds
                        }`}{" "}
                        -{" "}
                        {`${v.endHour < 10 ? "0" + v.endHour : v.endHour}:${
                          v.endMinute < 10 ? "0" + v.endMinute : v.endMinute
                        }:${
                          v.endSeconds < 10 ? "0" + v.endSeconds : v.endSeconds
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
            <Divider orientation="left">Pitch Graph</Divider>
          </div>
          <div className="item-desc">
            <ResponsiveBar
              style={{ border: "1px solid blue" }}
              data={pitchData && pitchData}
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
              isInteractive={true}
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
              isInteractive={true}
            />
          </div>
        </div>
      </div>
    </GuestHistoryDetailWrapper>
  );
};

export default GuestHistoryDetail;
