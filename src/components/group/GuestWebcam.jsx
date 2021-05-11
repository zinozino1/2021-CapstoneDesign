import React, { useRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import { Button } from "antd";

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
`;

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const GuestWebcam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [enableWebcam, setEnableWebcam] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    console.log(imageSrc[0]);
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

  useEffect(() => {
    let intervalCapture;

    if (enableWebcam) {
      intervalCapture = setInterval(() => {
        capture();
      }, 1000);
    } else {
      clearInterval(intervalCapture);
    }

    return () => {
      clearInterval(intervalCapture);
    };
  }, [enableWebcam, capture]);

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
            style={{ width: "300px", height: "300px", background: "#000" }}
          ></div>
        )}

        {/* <Button onClick={capture}>Capture</Button> */}
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
