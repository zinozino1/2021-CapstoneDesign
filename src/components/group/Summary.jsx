import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Button, Input, Select, notification } from "antd";
import useTimer from "../../hooks/useTimer";
import axios from "axios";
import { BACK_URL, CLASS_DURATION_MINUTE } from "../../libs/constant/constant";
import { Redirect } from "react-router-dom";
import useInput from "../../hooks/useInput";

/**
 * @author 박진호
 * @version 1.0
 * @summary 수업 결과 요약 컴포넌트
 */

const SummaryWrapper = styled.div``;

const SummaryHeader = styled.div`
  border: 1px solid #ddd;
  border-bottom: none;
  padding: 10px 0;
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
  .table-index {
    width: 20%;
    height: 35px;
    font-weight: 600;
  }
  .table-content {
    color: #999;
  }
  td {
    padding: 10px;
  }
`;

const SummaryFooter = styled.div`
  padding: 10px 0;
  text-align: right;
  .footer-btn {
    margin-left: 3px;
  }
`;

const openNotification = (placement) => {
  notification.info({
    message: `${
      new Date().getHours() < 10
        ? `0` + new Date().getHours()
        : new Date().getHours()
    }:${
      new Date().getMinutes() < 10
        ? `0` + new Date().getMinutes()
        : new Date().getMinutes()
    }:${
      new Date().getSeconds() < 10
        ? `0` + new Date().getSeconds()
        : new Date().getSeconds()
    }`,
    description:
      placement === 3
        ? "Current Classes's Vibe is Good."
        : placement === 2
        ? "Current Classes's Vibe is Normal."
        : "Current Classes's Vibe is Bad.",
    placement,
    duration: 0,
  });
};

// 게스트, 호스트에 따라 다르게
const Summary = ({ onAir, setOnAir }) => {
  const { groupDetail } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const [sessionId, setSessionId] = useState(null);
  const [isLeaved, setIsLeaved] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [saveDone, setSaveDone] = useState(false);
  const [editAbsenceTime, setEditAbsenceTime] = useState(0);
  const onChangeEditAbsenceTime = (value) => {
    setEditAbsenceTime(value);
  };
  const [editAlertDuration, setEditAlertDuration] = useState(0);
  const onChangeEditAlertDuration = (value) => {
    setEditAlertDuration(value);
  };
  const [alertTimer, setAlertTimer] = useState(0);

  const [h, m, s] = useTimer(onAir);

  const [editName, setEditName, onChangeEditName] = useInput(
    groupDetail ? groupDetail.data.groupName : "",
  );

  const startClass = () => {
    if (!onAir) {
      let startClassConfirm = window.confirm("Would you like to start class?");
      if (startClassConfirm) {
        setOnAir(true);
        axios
          .post(
            `${BACK_URL}/api/group/startSession/${
              document.location.href.split("/")[
                document.location.href.split("/").length - 1
              ]
            }`,
          )
          .then((res) => {
            setSessionId(res.data.id);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  const endClass = () => {
    if (onAir && sessionId) {
      let endClassConfirm = window.confirm("Would you like to end class?");
      if (endClassConfirm) {
        setOnAir(false);
        axios
          .post(`${BACK_URL}/api/group/endSession/${sessionId}`)
          .then((res) => {
            setAlertTimer(0);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  const saveGroupDetail = () => {
    let saveConfirm = window.confirm("Do you really want to edit?");
    if (saveConfirm) {
      axios
        .post(
          `/api/group/editGroupInfo/${
            document.location.href.split("/")[
              document.location.href.split("/").length - 1
            ]
          }`,
          {
            name: editName,
            absenceTime: editAbsenceTime,
            alertDuration: editAlertDuration,
          },
        )
        .then((res) => {
          setIsEdit(false);
          setSaveDone(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const removeGroup = () => {
    let removeConfirm = window.confirm("Are you really want remove the group?");
    if (removeConfirm) {
      if (me) {
        axios
          .delete(
            `/api/group/deleteGroup/${
              document.location.href.split("/")[
                document.location.href.split("/").length - 1
              ]
            }`,
          )
          .then((res) => {
            setIsRemoved(true);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  const leaveGroup = () => {
    let leaveConfirm = window.confirm("Are you really want leave the group?");
    if (leaveConfirm) {
      if (me) {
        axios
          .post(
            `/api/group/exitGroup/${
              document.location.href.split("/")[
                document.location.href.split("/").length - 1
              ]
            }`,
            { userId: me.data.userId },
          )
          .then((res) => {
            setIsLeaved(true);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  useEffect(() => {
    let intervalAlert;

    if (onAir && groupDetail) {
      intervalAlert = setInterval(() => {
        axios
          .get(`/api/history/getVibe/${sessionId}`)
          .then((res) => {
            setAlertTimer(alertTimer + 1);
            if (
              parseInt(m) !== 0 &&
              parseInt(m) % groupDetail.data.alertTime === 0 &&
              parseInt(s) === 0
            ) {
              openNotification(res.data.vibe);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }, 2000);
    } else {
      clearInterval(intervalAlert);
    }
    return () => {
      clearInterval(intervalAlert);
    };
  }, [sessionId, onAir, alertTimer, groupDetail, m]);

  if (!groupDetail) return null;

  if (isLeaved || isRemoved) return <Redirect to={`/main`} />;

  if (saveDone)
    return (
      <Redirect
        to={`/main/${
          document.location.href.split("/")[
            document.location.href.split("/").length - 1
          ]
        }`}
      />
    );

  return (
    <SummaryWrapper>
      {groupDetail.data.role === "HOST" && (
        <SummaryHeader>
          <span
            className="alert-text"
            style={{
              fontSize: "0.75rem",
              color: "#bbb",
            }}
          >
            <span style={{ color: "red", paddingLeft: "10px" }}>*</span> If you
            leave this page without saving, you may lose your work.
          </span>

          <div
            className="clock"
            style={{
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
        <table border="1" style={{ border: "1px solid #ddd" }} width="100%">
          <tbody>
            <tr>
              <td className="table-index">
                <span>Group Code</span>
              </td>
              <td className="table-content">
                <span>{groupDetail.data.groupCode}</span>
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Group Name</span>
              </td>
              <td className="table-content">
                {isEdit ? (
                  <>
                    <Input
                      defaultValue={groupDetail.data.groupName}
                      onChange={onChangeEditName}
                    ></Input>
                  </>
                ) : (
                  <span>{groupDetail.data.groupName}</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Absence Time</span>
              </td>
              <td className="table-content">
                {isEdit ? (
                  <>
                    <Select
                      placeholder="Absence Time"
                      onChange={onChangeEditAbsenceTime}
                    >
                      {CLASS_DURATION_MINUTE.map((v, i) => (
                        <Select.Option key={i}>{v}</Select.Option>
                      ))}
                    </Select>
                    <span style={{ marginLeft: "10px" }}>minutes</span>
                  </>
                ) : (
                  <span>{groupDetail.data.absenceTime} minutes</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="table-index">
                <span>Alert Duration</span>
              </td>
              <td className="table-content">
                {isEdit ? (
                  <>
                    <Select
                      placeholder="Alert Duration"
                      onChange={onChangeEditAlertDuration}
                    >
                      {CLASS_DURATION_MINUTE.map((v, i) => (
                        <Select.Option key={i}>{v}</Select.Option>
                      ))}
                    </Select>
                    <span style={{ marginLeft: "10px" }}>minutes</span>
                  </>
                ) : (
                  <span>{groupDetail.data.alertTime} minutes</span>
                )}
              </td>
            </tr>
            <tr>
              <td className="table-index">
                <span>Host Name</span>
              </td>
              <td className="table-content">{groupDetail.data.host}</td>
            </tr>
          </tbody>
        </table>
      </SummaryContent>
      {groupDetail.data.role === "HOST" ? (
        <SummaryFooter>
          {isEdit ? (
            <Button
              className="footer-btn"
              type="primary"
              onClick={saveGroupDetail}
            >
              Save
            </Button>
          ) : (
            <Button
              className="footer-btn"
              type="primary"
              onClick={() => {
                setIsEdit(true);
              }}
              disabled={onAir ? true : false}
            >
              Edit
            </Button>
          )}

          <Button
            className="footer-btn"
            type="danger"
            onClick={removeGroup}
            disabled={onAir ? true : false}
          >
            Remove Group
          </Button>
        </SummaryFooter>
      ) : (
        <SummaryFooter>
          <Button type="danger" onClick={leaveGroup}>
            Leave the Group
          </Button>
        </SummaryFooter>
      )}
    </SummaryWrapper>
  );
};

export default Summary;
