import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import LandingLogo from "../statics/images/LandingLogo3.png";
import CommonButton from "../components/common/CommonButton";

const LadingWrapper = styled.div``;

const LandingHeader = styled.div`
  height: 5vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  background: #aeb0d3;
  color: #fff;
  font-size: 0.7rem;
`;

const LandingSection = styled.div`
  height: 55vh;
  border: 1px solid black;
  padding-top: 40px;
  font-size: 4.5rem;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 100%;
  text-align: center;
  .logo-name {
    font-size: 7rem;
    line-height: 90%;
  }
  .btn-wrapper {
    margin-top: 7%;
    padding: 30px 0;
  }
  .login-btn-wrapper,
  .register-btn-wrapper {
    line-height: 0;
  }
`;

const LandingImgWrapper = styled.div`
  height: 40vh;
  border: 1px solid black;
  text-align: center;
`;

const LandingLogoImg = styled.img`
  width: 650px;
  height: auto;
  border: 1px solid blue;
`;

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOk = () => {
    console.log(11);
    setIsVisible(!isVisible);
  };

  return (
    <LadingWrapper>
      <LandingHeader>
        <div style={{ marginLeft: "10px" }}>
          Created by Park Jinho <span>{new Date().getFullYear()} </span>
        </div>
        <div style={{ marginRight: "10px" }}>
          &copy; Copyright All Reserved.
        </div>
      </LandingHeader>
      <LandingSection>
        <div style={{ border: "1px solid red", padding: 0 }}>
          Fall into a meeting
        </div>
        <div
          style={{ color: "#ccc", border: "1px solid red" }}
          className="logo-name"
        >
          Focus.
        </div>
        <div className="btn-wrapper" style={{ border: "1px solid blue" }}>
          <div
            style={{ color: "#ccc", border: "1px solid red" }}
            className="login-btn-wrapper"
          >
            <Button
              type="primary"
              onClick={handleOk}
              style={{
                width: "170px",
                background: "#aeb0d3",
                border: "1px solid #aeb0d3",
              }}
            >
              <a href="http://localhost:3000/login">Login</a>
            </Button>
          </div>
          <div
            style={{ color: "#ccc", border: "1px solid red" }}
            className="register-btn-wrapper"
          >
            <Button type="text" style={{}}>
              Register
            </Button>

            {/* <CommonButton
              content="Register!"
              type="text"
              style={{ width: "400px" }}
            ></CommonButton> */}
          </div>
        </div>
      </LandingSection>
      <LandingImgWrapper>
        <div>
          <LandingLogoImg src={LandingLogo} alt="logo" />
        </div>
      </LandingImgWrapper>
    </LadingWrapper>
  );
};

export default Landing;
