import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import { useSelector } from "react-redux";
import Register from "./Register";
import { useEffect } from "react";
import axios from "axios";

/**
 * @author 박진호
 * @version 1.0
 * @summary 마이페이지
 */

const MyPageWrapper = styled.div``;

const MyPage = () => {
  const { me } = useSelector((state) => state.user);

  const [profileImages, setProfileImages] = useState(null);
  useEffect(() => {
    if (me) {
      axios
        .get(`/api/image/getImage/${me.data.userId}`)
        .then((res) => {
          setProfileImages(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [me]);

  if (!me || !profileImages) return null;

  return (
    <ContentLayout>
      <MyPageWrapper>
        <Register
          type="mypage"
          myPageEmail={me.data.email}
          myPageName={me.data.name}
          profileImages={profileImages && profileImages}
        />
      </MyPageWrapper>
    </ContentLayout>
  );
};

export default MyPage;
