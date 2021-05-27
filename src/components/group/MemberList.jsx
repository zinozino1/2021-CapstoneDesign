import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Divider, Button } from "antd";
import { useDispatch } from "react-redux";
import {
  allowMemberRequestAction,
  rejectMemberRequestAction,
  waitingToGroup,
  waitingToNone,
} from "../../reducers/post";

// 그룹멤버리스트, 대기리스트 분기해야함

const MemberListContainer = styled.div`
  flex: 1;
  /* padding: 10px; */
`;

const MemberListWrapper = styled.div`
  height: 25vh;
  overflow: auto;
  border: 1px solid #ddd;
  table {
    border-color: #ddd;
  }
  tr {
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

const MemberList = ({ type, onAir }) => {
  const dispatch = useDispatch();
  const { groupDetail } = useSelector((state) => state.post);

  if (!groupDetail) return null;

  const allowMember = (userEmail, groupId, name) => {
    console.log(userEmail, groupId, name);
    dispatch(waitingToGroup({ name, userEmail }));
    dispatch(waitingToNone({ name, userEmail }));
    dispatch(allowMemberRequestAction({ userEmail, groupId }));
  };

  const rejectMember = (userEmail, groupId, name) => {
    dispatch(waitingToNone({ name, userEmail }));
    dispatch(rejectMemberRequestAction({ userEmail, groupId }));
  };

  return (
    <MemberListContainer>
      <Divider orientation="left">
        {type === "groupMember" ? "Group Member" : "Waiting Member"}
      </Divider>
      <MemberListWrapper>
        <table width="100%" style={{ border: "1px solid #ddd" }}>
          <tbody>
            <tr>
              <th className="th th-name">Name</th>
              <th className="th">Email</th>
              {type === "waitingMember" && <th className="th">Enter</th>}
            </tr>
            {type === "groupMember"
              ? groupDetail.data.groupMemberSimpleDtoList.map((v, i) => (
                  <tr key={i}>
                    <td className="td-gm td-gm-name">{v.name}</td>
                    <td className="td-gm">{v.email}</td>
                  </tr>
                ))
              : groupDetail.data.waitingMemberDtoList.map((v, i) => (
                  <tr key={i}>
                    <td className="td-wm">{v.name}</td>
                    <td className="td-wm">{v.email}</td>
                    <td className="td-wm" style={{ textAlign: "center" }}>
                      <Button
                        className="td-wm-btn"
                        onClick={() => {
                          allowMember(
                            v.email,
                            document.location.href.split("/")[
                              document.location.href.split("/").length - 1
                            ],
                            v.name,
                          );
                        }}
                        disabled={onAir ? true : false}
                      >
                        Accept
                      </Button>
                      <Button
                        disabled={onAir ? true : false}
                        className="td-wm-btn"
                        onClick={() => {
                          rejectMember(
                            v.email,
                            document.location.href.split("/")[
                              document.location.href.split("/").length - 1
                            ],
                            v.name,
                          );
                        }}
                      >
                        Reject
                      </Button>
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
