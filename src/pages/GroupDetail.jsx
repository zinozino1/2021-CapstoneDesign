import React, { useEffect, useState } from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider } from "antd";
import HostGroupDetail from "../components/group/HostGroupDetail";
import GuestGroupDetail from "../components/group/GuestGroupDetail";
import { hostGroupData } from "../libs/util/dummyCreator";

const GroupDetail = () => {
  // url 파라미터로 api 호출 후 그룹리스트의 role에 따라 분기

  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    // axios
    setGroupInfo(hostGroupData(12, 4));
  }, []);

  return (
    <ContentLayout>
      <Divider>Summary</Divider>
    </ContentLayout>
  );
};

export default GroupDetail;
