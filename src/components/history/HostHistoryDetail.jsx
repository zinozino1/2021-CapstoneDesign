import React, { useState } from "react";
import styled from "styled-components";
import { Table } from "antd";

/**
 * @author 박진호
 * @version 1.0
 * @summary 호스트 히스토리 디테일 컴포넌트
 */

const HostHistoryDetailWrapper = styled.div``;

const TableWrapper = styled.div``;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    width: 150,
    render: (text) => <span style={{ color: "#888" }}>{text}</span>,
  },
  {
    title: "Attitude",
    dataIndex: "attitude",
    width: 150,
    render: (text) => <span style={{ color: "#888" }}>{text}</span>,
  },
  {
    title: "Absence Time",
    dataIndex: "absenceTime",
    width: 150,
    render: (text) => (
      <span style={{ color: "#888" }}>
        {parseInt(parseInt(text) / 60) + " minutes"}
        <br />
        {(parseInt(text) % 60) + " seconds"}
      </span>
    ),
  },
  {
    title: "Attendance",
    dataIndex: "attendace",
    width: 150,
    render: (text) =>
      text === "FAIL" ? (
        <span style={{ color: "red" }}>{text}</span>
      ) : (
        <span style={{ color: "blue" }}>{text}</span>
      ),
  },
];

const HostHistoryDetail = ({ data }) => {
  const [newData, setNewData] = useState(
    data.historyGroupMemberDtoList.map((v, i) => ({
      key: i,
      name: v.name,
      email: v.email,
      attitude:
        v.attitude === 1 ? "Bad" : v.attitude === 2 ? "Average" : "Good",
      absenceTime: v.absenceTime + " minutes",
      attendace: v.attend ? "PASS" : "FAIL",
    })),
  );

  return (
    <HostHistoryDetailWrapper>
      <TableWrapper>
        <Table
          columns={columns}
          dataSource={newData}
          scroll={{ y: 450 }}
          pagination={false}
        />
      </TableWrapper>
    </HostHistoryDetailWrapper>
  );
};

export default HostHistoryDetail;
