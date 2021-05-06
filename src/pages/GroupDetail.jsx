import React, { useEffect, useState } from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider } from "antd";
import { hostGroupData } from "../libs/util/dummyCreator";
import Summary from "../components/group/Summary";
import MemberList from "../components/group/MemberList";
import HostWebcam from "../components/group/HostWebcam";
import { useDispatch } from "react-redux";
import { loadPostAction, initializePostAction } from "../reducers/post";
import { useSelector } from "react-redux";

const GroupDetail = ({ match }) => {
  // url 파라미터로 api 호출 후 그룹리스트의 role에 따라 분기
  const dispatch = useDispatch();
  const { groupDetail } = useSelector((state) => state.post);

  useEffect(() => {
    const { id } = match.params;

    dispatch(loadPostAction(id));
    return () => {
      dispatch(initializePostAction());
    };
  }, [match]);

  if (!groupDetail) return null;

  return (
    <ContentLayout>
      <Divider orientation="left">Summary</Divider>
      {/* 호스트, 게스트 공통 */}
      <Summary />
      {/* 호스트만 */}
      {groupDetail.person === "host" ? (
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
