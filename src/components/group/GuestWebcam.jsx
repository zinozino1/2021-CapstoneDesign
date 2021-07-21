import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import { Button, notification } from "antd";
import axios from "axios";
import FormData from "form-data";
import { useSelector } from "react-redux";
import effectSound from "../../libs/util/effectSound";
import AA from "../../statics/audios/absenceAlert.MP3";
import DA from "../../statics/audios/drowAlert.MP3";

/**
 * @author 박진호
 * @version 1.0
 * @summary 게스트(학생) 화면 컴포넌트
 */

const Container = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
`;

const GuestWebcamWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  text-align: center;
  padding-bottom: 10px;
`;

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

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
    description: "You have been away for a long time. You have been absent.",
    placement,
    duration: 0,
  });
};

const openNotification2 = (placement) => {
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
    description: "Wake up! It's time to focus!",
    placement,
    duration: 0,
  });
};

const formData = new FormData();
const formData2 = new FormData();
formData2.append("keys", "key 값 ");
let intervalCapture;

let absenceFlag = false;
let absenceTime = 0;
let absenceCount = 0;

let drowFlag = false;
let drowTime = 0;
let drowCount = 0;

const GuestWebcam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [enableWebcam, setEnableWebcam] = useState(false);

  const [isOnAir, setIsOnAir] = useState(false);
  const [sessionId, setSessionId] = useState(false);
  const [initFlag, setInitFlag] = useState(true);

  const { groupDetail } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const capture = useCallback(() => {
    if (me && groupDetail) {
      formData.delete("file");
      const imageSrc = webcamRef.current.getScreenshot();

      formData.append("file", imageSrc);
      formData.append("userId", me.data.userId);
      formData.append(
        "groupId",
        document.location.href.split("/")[
          document.location.href.split("/").length - 1
        ],
      );
      formData.append("userEmail", me.data.email);

      setImage(formData);
    }

    setImage(formData);
  }, [webcamRef]);

  const webcamOn = () => {
    setEnableWebcam(true);
  };

  const webcamOff = () => {
    setEnableWebcam(false);
    clearInterval(intervalCapture);
  };

  useEffect(() => {
    let initIntervalCapture;
    let afterIntervalCapture;

    if (enableWebcam && initFlag) {
      initIntervalCapture = setInterval(() => {
        capture();
        if (image) {
          axios
            .post("http://3.35.234.42:5000/image", image, {
              header: {
                "Content-Type": "multipart/form-data",
                Accept: "multipart/form-data",
              },
            })
            .then((res) => {
              setInitFlag(false);
            })
            .catch((e) => {
              setInitFlag(false);
              console.log(e);
            });
        }
      }, 7000);
    } else {
      clearInterval(initIntervalCapture);
    }

    if (enableWebcam && !initFlag && groupDetail) {
      afterIntervalCapture = setInterval(() => {
        capture();
        if (image) {
          axios
            .post("http://3.35.234.42:5000/image", image, {
              header: {
                "Content-Type": "multipart/form-data",
                Accept: "multipart/form-data",
              },
            })
            .then((res) => {
              let att = res.data.attendance;
              let sleep = res.data.sleepResult;

              if (!att) {
                absenceFlag = true;
              } else {
                absenceFlag = false;
              }

              if (sleep) {
                drowFlag = true;
              } else {
                drowFlag = false;
              }

              if (drowFlag) {
                drowTime += 1;

                if (drowTime >= 2) {
                  if (drowCount === 0) {
                    openNotification2("bottomRight");
                    const es = effectSound(DA, 1);
                    es.play();
                  }
                  drowCount += 1;
                }
              } else {
                drowCount = 0;
                drowTime = 0;
              }

              if (absenceFlag) {
                absenceTime += 1;

                if (absenceTime * 7 > groupDetail.data.absenceTime * 60) {
                  if (absenceCount === 0) {
                    openNotification("bottomRight");
                    const es = effectSound(AA, 1);
                    es.play();
                  }
                  absenceCount += 1;
                }
              } else {
                absenceTime = 0;
              }

              if (res.data && sessionId) {
                axios.post(`/api/history/createHistory`, {
                  sessionId,
                  userId: me.data.userId,
                  pitch: parseFloat(res.data.pitch2),
                  yaw: parseFloat(res.data.yaw2),
                  absence: !res.data.attendance,
                  drowse: res.data.sleepResult,
                });
              }
            })
            .catch((e) => {
              absenceTime += 1;
              if (absenceTime * 7 > groupDetail.data.absenceTime * 60) {
                if (absenceCount === 0) {
                  openNotification("bottomRight");
                  const es = effectSound(AA, 1);
                  es.play();
                }

                absenceCount += 1;
              }
              if (sessionId) {
                axios.post(`/api/history/createHistory`, {
                  sessionId,
                  userId: me.data.userId,
                  pitch: 0,
                  yaw: 0,
                  absence: true,
                  drowse: false,
                });
              }
            });
        }
      }, 7000);
    } else {
      clearInterval(afterIntervalCapture);
    }
    return () => {
      clearInterval(initIntervalCapture);
      clearInterval(afterIntervalCapture);
    };
  }, [enableWebcam, capture, image, initFlag, me, sessionId]);

  useEffect(() => {
    let intervalCheckSession;
    if (enableWebcam) {
      intervalCheckSession = setInterval(() => {
        axios
          .get(
            `/api/group/checkOnAir/${
              document.location.href.split("/")[
                document.location.href.split("/").length - 1
              ]
            }`,
          )
          .then((res) => {
            setIsOnAir(res.data.onAir);
            setSessionId(res.data.sessionId);
          });
      }, 1000);
    } else {
      clearInterval(intervalCheckSession);
    }
    return () => {
      clearInterval(intervalCheckSession);
    };
  }, [enableWebcam]);

  return (
    <Container>
      <ButtonsWrapper>
        <Button onClick={webcamOn} type="primary">
          ON
        </Button>
        <Button onClick={webcamOff} type="danger">
          OFF
        </Button>
      </ButtonsWrapper>
      <GuestWebcamWrapper>
        {enableWebcam ? (
          <Webcam
            audio={false}
            height={300}
            width={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <div
            style={{
              width: "300px",
              height: "300px",
              background: "#000",
              color: "#ddd",
              textAlign: "center",
              lineHeight: "300px",
            }}
          >
            Please turn on the webcam.
          </div>
        )}
      </GuestWebcamWrapper>
      <div
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          marginTop: "15px",
          color: "#bbb",
        }}
      >
        <span style={{ color: "red" }}>*</span> If you click the "OFF" during
        class, it is recognized as "absence".
      </div>
    </Container>
  );
};

export default GuestWebcam;
