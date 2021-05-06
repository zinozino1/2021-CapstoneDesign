import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "antd";

const SummaryWrapper = styled.div``;

const SummaryHeader = styled.div`
  border: 1px solid red;
  display: flex;
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
`;

// 게스트, 호스트에 따라 다르게
const Summary = () => {
  const { groupDetail } = useSelector((state) => state.post);

  if (!groupDetail) return null;

  return (
    <SummaryWrapper>
      {groupDetail.person === "host" && (
        <SummaryHeader>
          <span className="alert-text">
            If you leave this page without saving, you may lose your work.
          </span>
          <div className="onAir-clock">
            <div className="on-air">OnAir</div>
            <div className="clock">00:00:00</div>
          </div>
          <div className="btns">
            <Button>START</Button>
            <Button>END</Button>
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
          <Button>Save</Button>
          <Button>Remove Group</Button>
        </SummaryFooter>
      ) : (
        <SummaryFooter></SummaryFooter>
      )}
    </SummaryWrapper>
  );
};

export default Summary;
