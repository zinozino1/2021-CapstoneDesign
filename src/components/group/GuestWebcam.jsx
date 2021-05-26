import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import { Button, notification } from "antd";
import axios from "axios";
import FormData from "form-data";
import { useSelector } from "react-redux";
import faker from "faker";

const Container = styled.div`
  border: 1px solid red;
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

const GuestWebcam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [enableWebcam, setEnableWebcam] = useState(false);

  const [absenceFlag, setAbsenceFlag] = useState(false);
  const [absenceTime, setAbsenceTime] = useState(0);
  const [absenceCount, setAbsenceCount] = useState(0);

  const [drowFlag, setDrowFlag] = useState(false);
  const [drowTime, setDrowTime] = useState(0);
  const [drowCount, setDrowCount] = useState(0);

  const { groupDetail } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const capture = useCallback(() => {
    if (me && groupDetail) {
      formData.delete("file");
      const imageSrc = webcamRef.current.getScreenshot();
      console.log("capturing Image", imageSrc.slice(0, 10));
      formData.append("file", imageSrc);
      formData.append("userId", me.data.userId);
      formData.append(
        "groupId",
        document.location.href.split("/")[
          document.location.href.split("/").length - 1
        ],
      );

      setImage(formData);
      // setImage(imageSrc);
    }
    // formData.delete("file");
    // const imageSrc = webcamRef.current.getScreenshot();
    // // console.log(imageSrc.slice(3));
    // formData.append("file", imageSrc);

    setImage(formData);
    // setImage(imageSrc);
  }, [webcamRef]);

  const webcamOn = () => {
    setEnableWebcam(true);
    //intervalCapture();
  };

  const webcamOff = () => {
    setEnableWebcam(false);
    clearInterval(intervalCapture);
  };

  // useEffect(() => {
  //   console.log(image[0]);
  // }, [image]);

  // const manualCapture = () => {
  //   console.log("image manual capture");
  //   capture();
  // };

  // const sendImage = () => {
  //   // for (var pair of image.entries()) {
  //   //   console.log(pair[0] + ", " + pair[1], "ㅋㅋㅋㅋ");
  //   // }

  //   axios
  //     .post("http://localhost:5000/image", image, {
  //       header: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // 실제

  // useEffect(() => {
  //   let intervalCapture;

  //   if (enableWebcam) {
  //     intervalCapture = setInterval(() => {
  //       capture();
  //       if (image) {
  //         axios
  //           .post("http://localhost:5000/image", image, {
  //             header: {
  //               "Content-Type": "multipart/form-data",
  //               Accept: "multipart/form-data",
  //             },
  //           })
  //           .then((res) => {
  //             console.log(res);
  //           })
  //           .catch((e) => {
  //             console.log(e);
  //           });
  //       }
  //     }, 7000);
  //   } else {
  //     clearInterval(intervalCapture);
  //   }
  //   return () => {
  //     clearInterval(intervalCapture);
  //   };
  // }, [enableWebcam, capture, image]);

  // 임시 방편
  useEffect(() => {
    // 게스트 알림 작업해야댐
    let intervalCapture;

    if (enableWebcam) {
      intervalCapture = setInterval(() => {
        let tmp = faker.datatype.number({
          min: 96,
          max: 100,
        });
        let tmp2 = true;
        console.log(tmp);
        console.log("absence Time : ", absenceTime);
        // if (tmp > 95) {

        //   openNotification("bottomRight");
        // }
        if (tmp > 95) {
          setAbsenceFlag(true);
        } else {
          setAbsenceFlag(false);
        }

        if (tmp2) {
          setDrowFlag(true);
        } else {
          setDrowFlag(false);
        }
        // 졸기 시작했을 때
        if (drowFlag) {
          setDrowTime(drowTime + 1);
          if (drowTime > 10) {
            // 10초이상 눈 감은 경우
            if (drowCount === 0) {
              openNotification2("bottomRight");
            }
            setDrowCount(drowCount + 1);
          }
        } else {
          // 안졸기 시작했을 때
          setDrowCount(0);
          setDrowTime(0);
        }

        if (absenceFlag) {
          setAbsenceTime(absenceTime + 1);
          if (absenceTime > 10) {
            if (absenceCount === 0) {
              openNotification("bottomRight");
            }
            setAbsenceCount(absenceCount + 1);
          }
        } else {
          setAbsenceTime(0);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalCapture);
    };
  }, [enableWebcam, absenceTime, absenceFlag, absenceCount]);

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

        {/* <Button onClick={manualCapture}>Capture</Button>
        <Button onClick={sendImage}>send Image</Button> */}
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
