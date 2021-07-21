import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import LandingLogo from "../statics/images/LandingLogo3.png";
import { palette } from "../libs/constant/palette";
import { Link } from "react-router-dom";

/**
 * @author 박진호
 * @version 1.0
 * @summary 랜딩 페이지
 */

const LadingWrapper = styled.div``;

const LandingHeader = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #aeb0d3;
  color: #fff;
  font-size: 0.7rem;
`;

const LandingSection = styled.div`
  height: 55vh;
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

  text-align: center;
`;

const LandingLogoImg = styled.img`
  width: 40%;
  height: auto;
`;

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOk = () => {
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
        <div style={{ padding: 0 }}>Fall into a meeting</div>
        <div style={{ color: "#ccc" }} className="logo-name">
          Focus.
        </div>
        <div className="btn-wrapper">
          <div style={{ color: "#ccc" }} className="login-btn-wrapper">
            <Button
              type="primary"
              onClick={handleOk}
              style={{
                width: "170px",
                background: palette.mainBG,
                border: `1px solid ` + palette.mainBG,
              }}
            >
              <Link to="login">Login</Link>
            </Button>
          </div>
          <div style={{ color: "#ccc" }} className="register-btn-wrapper">
            <Button type="text">
              <Link
                to="register"
                style={{ textDecoration: "underLine", color: "#aaa" }}
              >
                Register
              </Link>
            </Button>
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
