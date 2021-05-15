import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import { Button } from "antd";
import axios from "axios";
import FormData from "form-data";

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

const formData = new FormData();
const formData2 = new FormData();
formData2.append("keys", "key 값 ");

const GuestWebcam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [enableWebcam, setEnableWebcam] = useState(false);

  const capture = useCallback(() => {
    formData.delete("file");
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc.slice(3));
    formData.append("file", imageSrc);
    // for (var pair of image.entries()) {
    //   console.log(pair[0] + ", " + pair[1], "ㅋㅋㅋㅋ");
    // }
    setImage(formData);
    // setImage(imageSrc);
  }, [webcamRef]);

  const webcamOn = () => {
    setEnableWebcam(true);
  };

  const webcamOff = () => {
    setEnableWebcam(false);
  };

  // useEffect(() => {
  //   console.log(image[0]);
  // }, [image]);

  const manualCapture = () => {
    console.log("image manual capture");
    capture();
  };

  const tempApi = () => {
    for (var pair of formData2.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post("http://localhost:5000/ping", formData2, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const sendImage = () => {
    for (var pair of image.entries()) {
      console.log(pair[0] + ", " + pair[1], "ㅋㅋㅋㅋ");
    }
    axios
      .post("http://localhost:5000/image", image, {
        header: {
          "Content-Type": "multipart/form-data",
          Accept: "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // useEffect(() => {
  //   let intervalCapture;

  //   if (enableWebcam) {
  //     intervalCapture = setInterval(() => {
  //       capture();
  //     }, 1000);
  //   } else {
  //     clearInterval(intervalCapture);
  //   }
  //   return () => {
  //     clearInterval(intervalCapture);
  //   };
  // }, [enableWebcam, capture]);

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

        <Button onClick={manualCapture}>Capture</Button>
        <Button onClick={sendImage}>send Image</Button>
        <Button onClick={tempApi}>send tmp api</Button>
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
