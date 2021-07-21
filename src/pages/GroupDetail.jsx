import React, { useEffect, useState } from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider } from "antd";
import Summary from "../components/group/Summary";
import MemberList from "../components/group/MemberList";
import { useDispatch } from "react-redux";
import { loadPostAction, initializePostAction } from "../reducers/post";
import { useSelector } from "react-redux";
import GuestWebcam from "../components/group/GuestWebcam";
import axios from "axios";
import { imageToBase64 } from "../libs/util/imageToBase64";

/**
 * @author 박진호
 * @version 1.0
 * @summary 그룹 상세 페이지
 * @etc 사전에 트레이닝된 멤버 외 일반화 작업 필요
 */

import park1 from "../statics/testImages/park1.jpeg";
import park2 from "../statics/testImages/park2.jpeg";
import park3 from "../statics/testImages/park3.jpeg";

import kim1 from "../statics/testImages/kim1.jpeg";
import kim2 from "../statics/testImages/kim2.jpeg";
import kim3 from "../statics/testImages/kim3.jpeg";

import han1 from "../statics/testImages/han1.jpeg";
import han2 from "../statics/testImages/han2.jpeg";
import han3 from "../statics/testImages/han3.jpeg";

import yang1 from "../statics/testImages/yang1.jpeg";
import yang2 from "../statics/testImages/yang2.jpeg";
import yang3 from "../statics/testImages/yang3.jpeg";

const images1 = [park1, park2, park3]; // 박진호
const images2 = [kim1, kim2, kim3]; // 김지훈
const images3 = [han1, han2, han3]; // 한창희
const images4 = [yang1, yang2, yang3]; // 양세영
let tmp1 = [];
let tmp2 = [];
let tmp3 = [];
let tmp4 = [];

const GroupDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { groupDetail } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const [onAir, setOnAir] = useState(false);

  useEffect(() => {
    const { id } = match.params;
    if (me) {
      dispatch(loadPostAction({ id, groupId: id, userId: me.data.userId }));
    }

    return () => {
      dispatch(initializePostAction());
    };
  }, [match, me]);

  if (!groupDetail) return null;

  return (
    <ContentLayout>
      <Divider orientation="left">Summary</Divider>
      <Summary groupDetail={groupDetail} onAir={onAir} setOnAir={setOnAir} />

      {groupDetail.data.role === "HOST" ? (
        <>
          <div style={{ display: "flex" }}>
            <MemberList type="groupMember" match={match} />
            <MemberList type="waitingMember" match={match} onAir={onAir} />
          </div>
        </>
      ) : (
        <GuestWebcam />
      )}
    </ContentLayout>
  );
};

export default GroupDetail;
