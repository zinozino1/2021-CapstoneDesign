import React, { useEffect, useState } from "react";
import ContentLayout from "../components/layout/ContentLayout";
import { Divider, Button } from "antd";
import { hostGroupData } from "../libs/util/dummyCreator";
import Summary from "../components/group/Summary";
import MemberList from "../components/group/MemberList";
import { useDispatch } from "react-redux";
import { loadPostAction, initializePostAction } from "../reducers/post";
import { useSelector } from "react-redux";
import GuestWebcam from "../components/group/GuestWebcam";
import FormData from "form-data";
import axios from "axios";
import { imageToBase64 } from "../libs/util/imageToBase64";

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
  // url 파라미터로 api 호출 후 그룹리스트의 role에 따라 분기
  const dispatch = useDispatch();
  const { groupDetail } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);

  const [onAir, setOnAir] = useState(false);

  const sendTestImages = () => {
    console.log("send Test Images");

    images1.forEach((image, i) => {
      imageToBase64(image).then((res) => {
        //formData1.append("image" + i, res);
        tmp1.push(res);
      });
    });

    images2.forEach((image, i) => {
      imageToBase64(image).then((res) => {
        //formData1.append("image" + i, res);
        tmp2.push(res);
      });
    });

    images3.forEach((image, i) => {
      imageToBase64(image).then((res) => {
        //formData1.append("image" + i, res);
        tmp3.push(res);
      });
    });

    images4.forEach((image, i) => {
      imageToBase64(image).then((res) => {
        //formData1.append("image" + i, res);
        tmp4.push(res);
      });
    });

    console.log(tmp1, tmp2, tmp3, tmp4);
    const data = {
      groupData: [
        { groupName: "Capstone Design", userId: "1", images: tmp1 },
        { groupName: "Capstone Design", userId: "2", images: tmp2 },
        { groupName: "Capstone Design", userId: "3", images: tmp3 },
        { groupName: "Capstone Design", userId: "4", images: tmp4 },
      ],
    };

    console.log(data);
    setTimeout(() => {
      axios
        .post("http://localhost:5000/groupImages", data)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  };

  useEffect(() => {
    //let s = imageToBase64(park1);
    //console.log(s);
  }, []);

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
      {/* 호스트, 게스트 공통 */}
      <Summary groupDetail={groupDetail} onAir={onAir} setOnAir={setOnAir} />
      {/* 호스트만 */}
      {groupDetail.data.role === "HOST" ? (
        <>
          <div style={{ display: "flex" }}>
            <MemberList type="groupMember" match={match} />
            <MemberList type="waitingMember" match={match} onAir={onAir} />
          </div>
          {/* <Button onClick={sendTestImages}>Send Group Member's Images</Button> */}
        </>
      ) : (
        <GuestWebcam />
      )}
    </ContentLayout>
  );
};

export default GroupDetail;
