import React, { Component } from "react";
import Webcam from "react-webcam";

/**
 * @author 박진호
 * @version 1.0
 * @summary 웹캠 클래스형 컴포넌트
 * @deprecated 훅으로 대체
 */

const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: "user",
};

export default class WebCamPicure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takingPicture: false,
    };
    this.image = null;
    this.webcam = React.createRef();
  }

  capture = () => {
    const imageSrc = this.webcam.current.getScreenshot();
    this.props.landmarkPicture(imageSrc);
  };

  render() {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Webcam
          audio={false}
          height={350}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
      </div>
    );
  }
}
