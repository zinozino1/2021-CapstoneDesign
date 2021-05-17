import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { Divider } from "antd";
import { Bar } from "react-chartjs-2";

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
  console.log(data);
  console.log([...Object.entries(data.roll).map((v, i) => v[1])]);

  const rollChartRef = useRef(null);

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
            <Bar
              ref={rollChartRef}
              data={{
                // 각 막대별 라벨
                labels: ["Left", "Front", "Right"],
                datasets: [
                  {
                    label: "Roll",
                    borderWidth: 0.5, // 테두리 두께
                    data: [
                      ...Object.entries(data.roll).map((v, i) => {
                        console.log(v);
                        return v[1];
                      }),
                    ], // 수치
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                  },
                ],
              }}
              options={{
                legend: {
                  display: false, // label 보이기 여부
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        min: 0, // y축 스케일에 대한 최소값 설정
                        stepSize: 1, // y축 그리드 한 칸당 수치
                      },
                    },
                  ],
                },

                // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
                // true : 크기가 알아서 결정됨.
                maintainAspectRatio: true,
              }}
              height={200}
              style={{ border: "1px solid red", margin: "0 auto" }}
            ></Bar>
          </div>
        </div>
        <div className="item yaw graph">
          <div className="divider">
            <Divider orientation="left">Yaw Graph</Divider>
          </div>
          <div className="item-desc"></div>
        </div>
      </div>
    </GuestHistoryDetailWrapper>
  );
};

export default GuestHistoryDetail;
