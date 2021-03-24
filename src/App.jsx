import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import MyActivity from "./pages/MyActivity";

// const videoConstraints = {
//   width: 800,
//   height: 720,
//   facingMode: "user",
// };

const App = () => {
  // let net;
  // const camera = useRef();
  // const figures = useRef();
  // const webcamElement = camera.current;

  // const [toggleStart, setToggleStart] = useState(false);

  // const onClickStart = useCallback(() => {
  //   setToggleStart(!toggleStart);
  // }, [toggleStart]);

  // const run = async () => {
  //   net = await mobilenet.load();

  //   const webcam = await tf.data.webcam(webcamElement, {
  //     resizeWidth: 500,
  //     resizeHeight: 520,
  //   });
  //   while (true) {
  //     const img = await webcam.capture();
  //     const result = await net.classify(img);

  //     if (figures.current) {
  //       figures.current.innerText = `prediction : ${result[0].className} \n probability: ${result[0].probability}`;
  //     }

  //     img.dispose();

  //     await tf.nextFrame();
  //   }
  // };

  // useEffect(() => {
  //   run();
  // });

  // const webcamRef = React.useRef(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  // }, [webcamRef]);

  return (
    <>
      {/* <div ref={figures}></div> */}
      {/* <video
        autoPlay
        playsInline
        muted={true}
        ref={camera}
        width="870"
        height="534"
      /> */}
      {/* <Webcam
        audio={false}
        height={720}
        ref={camera}
        screenshotFormat="image/jpeg"
        width={800}
        videoConstraints={videoConstraints}
      />
      <button onClick={onClickStart}>{toggleStart ? "Close" : "Run"}</button> */}

      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/myActivity" component={MyActivity} exact></Route>
      </Switch>
    </>
  );
};

export default App;
