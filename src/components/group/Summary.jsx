import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Button } from "antd";
import useTimer from "../../hooks/useTimer";

const SummaryWrapper = styled.div``;

const SummaryHeader = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  .clock {
    .onAir-clock,
    .onAir-clock-activate {
      width: 100px;

      padding: 0 20px;
      margin: 0 20px;
      font-weight: bold;
      text-align: center;
    }
    .onAir-clock {
      border: 1px solid #ddd;
    }
    .onAir-clock-activate {
      background: #ff4d4f;
      color: #fff;
    }
  }
`;

const SummaryContent = styled.div`
  /* border: 1px solid red; */
  .table-index {
    width: 20%;
    height: 35px;
  }
  td {
    padding: 10px;
  }
`;

const SummaryFooter = styled.div`
  border: 1px solid red;
  text-align: right;
  .footer-btn {
    margin-left: 3px;
  }
`;

// 게스트, 호스트에 따라 다르게
const Summary = () => {
  const { groupDetail } = useSelector((state) => state.post);
  const [onAir, setOnAir] = useState(false);

  const [h, m, s] = useTimer(onAir);

  const startClass = () => {
    if (!onAir) {
      let startClassConfirm = window.confirm("Would you like to start class?");
      if (startClassConfirm) {
        setOnAir(true);
      }
    }
  };

  const endClass = () => {
    if (onAir) {
      let endClassConfirm = window.confirm("Would you like to end class?");
      if (endClassConfirm) {
        setOnAir(false);
      }
    }
  };

  useEffect(() => {
    console.log(onAir);
  }, [onAir]);

  useEffect(() => {
    console.log(h, m, s);
  }, [h, m, s]);

  if (!groupDetail) return null;

  return (
    <SummaryWrapper>
      {groupDetail.person === "host" && (
        <SummaryHeader>
          <span
            className="alert-text"
            style={{
              border: "1px solid red",
              fontSize: "0.75rem",
              color: "#bbb",
            }}
          >
            <span style={{ color: "red" }}>*</span> If you leave this page
            without saving, you may lose your work.
          </span>

          <div
            className="clock"
            style={{
              border: "1px solid red",
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {onAir ? (
              <div className="onAir-clock onAir-clock-activate">
                <div className="on-air">ON AIR</div>
                <div className="clock">{`${h}:${m}:${s}`}</div>
              </div>
            ) : (
              <div className="onAir-clock">
                <div className="on-air">ON AIR</div>
                <div className="clock">{`${h}:${m}:${s}`}</div>
              </div>
            )}

            <Button onClick={startClass}>START</Button>
            <Button onClick={endClass}>END</Button>
          </div>
        </SummaryHeader>
      )}

      <SummaryContent>
        <table border="1" width="100%">
          <tbody>
            <tr>
              <td className="table-index">
                <span>Group Code</span>
              </td>
              <td className="table-content">
                <span>{groupDetail.groupCode}</span>
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Group Name</span>
              </td>
              <td className="table-content">
                <span>{groupDetail.groupName}</span>
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Limit Absence Time</span>
              </td>
              <td className="table-content">
                <span>{groupDetail.absenceTime}</span>
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Creation Date</span>
              </td>
              <td className="table-content">
                {groupDetail.creationDate.getFullYear()}
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Atmosphere Alert Time</span>
              </td>
              <td className="table-content">
                <span>{groupDetail.alertTime}</span>
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>HOST</span>
              </td>
              <td className="table-content">{groupDetail.host}</td>
            </tr>
          </tbody>
        </table>
      </SummaryContent>
      {groupDetail.person === "host" ? (
        <SummaryFooter>
          <Button className="footer-btn" type="primary">
            Save
          </Button>
          <Button className="footer-btn" type="danger">
            Remove Group
          </Button>
        </SummaryFooter>
      ) : (
        <SummaryFooter>
          <Button type="danger">Leave the Group</Button>
        </SummaryFooter>
      )}
    </SummaryWrapper>
  );
};

export default Summary;
