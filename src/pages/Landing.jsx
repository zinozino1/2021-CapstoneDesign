import React from "react";
import styled from "styled-components";
import LandingLogo from "../statics/images/LandingLogo3.png";

const LadingWrapper = styled.div``;

const LandingHeader = styled.div`
  height: 5vh;
  border: 1px solid black;
`;

const LandingSection = styled.div`
  height: 50vh;
  border: 1px solid black;
  font-size: 5rem;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 100%;
  text-align: center;
`;

const LandingImgWrapper = styled.div`
  height: 45vh;
  border: 1px solid black;
  text-align: center;
`;

const LandingLogoImg = styled.img`
  width: 600px;
  height: auto;
  border: 1px solid blue;
`;

const Landing = () => {
  return (
    <LadingWrapper>
      <LandingHeader></LandingHeader>
      <LandingSection>
        <div style={{ border: "1px solid red", padding: 0 }}>
          Focus to Class.
        </div>
        <div style={{ color: "#ddd", border: "1px solid red" }}>HawkEye</div>
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
