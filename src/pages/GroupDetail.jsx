import React from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider } from "antd";

const GroupDetail = () => {
  // useselector로 user부른 후 host & guest로 컴포넌트 분기
  return (
    <ContentLayout>
      <Divider>Summary</Divider>
    </ContentLayout>
  );
};

export default GroupDetail;
