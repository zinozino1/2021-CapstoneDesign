import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Divider, Button } from "antd";

// 그룹멤버리스트, 대기리스트 분기해야함

const MemberListContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const MemberListWrapper = styled.div`
  height: 25vh;
  overflow: auto;
  border: 1px solid red;
  table {
    border-color: #ddd;
  }
  .th {
    padding: 7px;
    background: #aeb0d3;
    color: #fff;
  }
  .td-gm,
  .td-wm {
    padding: 4px 7px;
  }
  .th-name,
  .td-gm-name {
    width: 30%;
  }
  .td-wm-btn {
    font-size: 0.75rem;
    margin-left: 3px;
  }
`;

const MemberList = ({ type }) => {
  const { groupDetail } = useSelector((state) => state.post);

  if (!groupDetail) return null;

  return (
    <MemberListContainer>
      <Divider orientation="left">
        {type === "groupMember" ? "Group Member" : "Waiting Member"}
      </Divider>
      <MemberListWrapper>
        <table border="1" width="100%">
          <tbody>
            <tr>
              <th className="th th-name">Name</th>
              <th className="th">Email</th>
              {type === "waitingMember" && <th className="th">Enter</th>}
            </tr>
            {type === "groupMember"
              ? groupDetail.groupMember.map((v, i) => (
                  <tr key={i}>
                    <td className="td-gm td-gm-name">{v.name}</td>
                    <td className="td-gm">{v.email}</td>
                  </tr>
                ))
              : groupDetail.waitingMember.map((v, i) => (
                  <tr key={i}>
                    <td className="td-wm">{v.name}</td>
                    <td className="td-wm">{v.email}</td>
                    <td className="td-wm" style={{ textAlign: "center" }}>
                      <Button className="td-wm-btn">Accept</Button>
                      <Button className="td-wm-btn">Reject</Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </MemberListWrapper>
    </MemberListContainer>
  );
};

export default MemberList;
