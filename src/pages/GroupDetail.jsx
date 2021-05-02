import React, { useEffect, useState } from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider } from "antd";
import HostGroupDetail from "../components/group/HostGroupDetail";
import GuestGroupDetail from "../components/group/GuestGroupDetail";
import { hostGroupData } from "../libs/util/dummyCreator";
import Summary from "../components/group/Summary";
import MemberList from "../components/group/MemberList";
import HostWebcam from "../components/group/HostWebcam";

const GroupDetail = () => {
  // url 파라미터로 api 호출 후 그룹리스트의 role에 따라 분기

  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    // axios로 데이터 정제
    setGroupInfo(hostGroupData(12, 4));
    // redux로 처리해야할 듯
  }, []);

  return (
    <ContentLayout>
      <Divider>Summary</Divider>
      <Summary />
      {groupInfo.person === "host" ? (
        <>
          <MemberList type="groupMember" />
          <MemberList type="waitingMember" />
        </>
      ) : (
        <HostWebcam />
      )}
    </ContentLayout>
  );
};

export default GroupDetail;
