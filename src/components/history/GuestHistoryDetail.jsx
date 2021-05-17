import React from "react";
import styled, { css } from "styled-components";
import { Divider } from "antd";

const GuestHistoryDetailWrapper = styled.div`
  .top,
  .bottom {
    display: flex;
  }
  .item {
    height: 250px;
    flex: 1;
    border: 1px solid violet;
    .item-desc {
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
  console.log(data);
  return (
    <GuestHistoryDetailWrapper>
      <div className="top">
        <div className="item attendance">
          <Divider orientation="left">Attendance</Divider>
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
          <div>
            <Divider orientation="left">Timeline Log</Divider>
          </div>
          <div
            className="item-desc"
            style={{
              height: "77%",
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
          <Divider orientation="left">Roll Graph</Divider>
          <div className="item-desc"></div>
        </div>
        <div className="item yaw graph">
          <Divider orientation="left">Yaw Graph</Divider>
          <div className="item-desc"></div>
        </div>
      </div>
    </GuestHistoryDetailWrapper>
  );
};

export default GuestHistoryDetail;
