import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Divider } from "antd";
// 그룹멤버리스트, 대기리스트 분기해야함

const MemberListWrapper = styled.div`
  height: 25vh;
  overflow: scroll;
`;

const MemberList = ({ type }) => {
  const { groupDetail } = useSelector((state) => state.post);

  if (!groupDetail) return null;

  return (
    <>
      <Divider orientation="left">
        {type === "groupMember" ? "Group Member" : "Waiting Member"}
      </Divider>
      <MemberListWrapper>
        <table border="1" width="100%">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {type === "groupMember"
              ? groupDetail.groupMember.map((v, i) => (
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                  </tr>
                ))
              : groupDetail.waitingMember.map((v, i) => (
                  <tr key={i}>
                    <td>{v.name}</td>
                    <td>{v.email}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </MemberListWrapper>
    </>
  );
};

export default MemberList;
