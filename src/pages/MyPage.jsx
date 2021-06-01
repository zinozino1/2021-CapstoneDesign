import React, { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import { useSelector } from "react-redux";
import Register from "./Register";

const MyPageWrapper = styled.div``;

const RegisterWrapper = styled.div`
  padding: 50px 50px;
  .ant-upload-list-picture-card-container {
    width: 120px;
    height: 140px;
    /* margin-left: 30px; */
  }
  .ant-upload-select-picture-card {
    width: 120px;
    height: 140px;
    /* margin-left: 30px; */
  }
`;

const MyPage = () => {
  const { me } = useSelector((state) => state.user);

  const [fileList, setFileList] = useState([]);

  if (!me) return null;

  return (
    <ContentLayout>
      <MyPageWrapper>
        <Register
          type="mypage"
          myPageEmail={me.data.email}
          myPageName={me.data.name}
        />
      </MyPageWrapper>
    </ContentLayout>
  );
};

export default MyPage;
