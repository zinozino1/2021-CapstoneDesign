import React, { useEffect, useRef, useState, useCallback } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import axios from "axios";
import { AZURE_FACEAPI } from "../libs/constant/constant";

const MODEL_URL = "/models";
let webcam = document.getElementById("webcam");

const videoConstraints = {
  width: 300,
  height: 320,
  facingMode: "user",
};
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

const Test = () => {
  const camera = useRef();

  const [toggleStart, setToggleStart] = useState(true);
  const [image, setImage] = useState(null);

  const onClickStart = useCallback(() => {
    setToggleStart(!toggleStart);
  }, [toggleStart]);

  // const startVideo = () => {
  //   // const webcam = document.getElementById("webcam");

  //   console.log("access");
  //   navigator.getUserMedia(
  //     {
  //       video: {},
  //     },
  //     (stream) => (webcam.srcObject = stream),
  //     (err) => console.error(err),
  //   );
  //   setTimeout(() => {
  //     createCanvas();
  //   }, 2000);
  // };

  // const createCanvas = () => {
  //   // const webcam = document.getElementById("webcam");
  //   // console.log(webcam);
  //   // canvas 만들기
  //   setCanvas(faceapi.createCanvasFromMedia(webcam));

  //   // const displaySize = { width: webcam.width, height: webcam.height };
  //   // faceapi.matchDimensions(canvas, displaySize);
  // };

  // const loadModels = () => {
  //   Promise.all([
  //     faceapi.loadTinyFaceDetectorModel(MODEL_URL),
  //     faceapi.loadMtcnnModel(MODEL_URL),
  //     faceapi.loadSsdMobilenetv1Model(MODEL_URL),
  //     faceapi.loadFaceLandmarkModel(MODEL_URL),
  //     faceapi.loadFaceRecognitionModel(MODEL_URL),
  //     faceapi.loadFaceExpressionModel(MODEL_URL),
  //     faceapi.loadAgeGenderModel(MODEL_URL),
  //   ])
  //     .then(() => {
  //       console.log("load model complete.");
  //       startVideo();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   webcam = document.getElementById("webcam");
  //   loadModels();
  // }, []);

  useEffect(() => {}, [image]);
  const b64toBlob = (b64DataStr, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64DataStr);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  const captureWebcam = () => {
    const imageSrc = camera.current.getScreenshot();
    // console.log(window.atob(imageSrc));
    const s = imageSrc.split(",");
    const blob = b64toBlob(s[1]);
    analysisImage(blob);
    setImage(imageSrc);
  };

  const config = {
    headers: {
      "Ocp-Apim-Subscription-Key": "b3ff7d2cc55d4434b74cbb6c8a1d891e",
      "Content-type": "application/octet-stream",
      Accept: "*/*",
    },
  };

  const analysisImage = (src) => {
    console.log(src);
    axios
      .post(AZURE_FACEAPI, src, config)
      .then((res) => {
        console.log(res.data[0].faceLandmarks.eyeLeftBottom);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Webcam
        id="webcam"
        audio={false}
        height={320}
        ref={camera}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
        onPlay={() => {}}
      />
      <button onClick={captureWebcam}>capture</button>
      <button
        onClick={() => {
          analysisImage();
          //onClickfuck();
        }}
      >
        이미지분석
      </button>
      {image && <img src={image} alt="1" />}
    </div>
  );
};

export default Test;
