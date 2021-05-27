import React, { useState } from "react";
import styled from "styled-components";
import { Image, Button, Descriptions } from "antd";
import ExampleProfileImage from "../../statics/images/ExampleProfileImage.jpeg";
import useToggle from "../../hooks/useToggle";
import Modal from "../common/Modal";
import CreateGroup from "./CreateGroup";
import JoinGroup from "./JoinGroup";
import { useSelector } from "react-redux";

const MainHeaderWrapper = styled.div`
  display: flex;
  .ant-descriptions .ant-descriptions-bordered {
    height: 100%;
  }
  .ant-descriptions-view {
    height: 180px;
    th,
    td {
      height: 180px;
    }
  }
`;
const MyProfileWrapper = styled.div`
  border: 1px solid #ddd;
  border-right: none;
  flex: 1;
  display: flex;
  .profile-image {
    flex: 1;
    display: flex;
    justify-content: center;
    .ant-image {
      display: flex;

      align-items: center;
    }
  }
  .profile-desc {
    flex: 1;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    .info {
      text-align: right;
      font-size: 1.2rem;
      background: #ffc224;
      color: #fff;
      padding-right: 10px;
    }
    .role {
      flex: 1;
      font-weight: 400;
      font-size: 0.75rem;
      border: 1px solid #ddd;
      border-bottom: none;
      text-align: center;
      line-height: 40px;
      color: #aaa;
    }
    .username {
      flex: 1;
      font-size: 1.55rem;
      border: 1px solid #ddd;
      border-bottom: none;

      padding: 20px;
      text-align: center;
    }
  }
`;

const RoomBtnWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-left: none;
  flex: 1;
  height: 180px;

  .guest {
    flex: 1;
    padding: 25px;
  }
  .host {
    flex: 1;
    padding: 25px;
  }
  .btn-guest,
  .btn-host {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-size: 2.5rem;
  }
  .btn-guest {
    background-color: #aeb0d3;
    border: 1px solid #aeb0d3;
  }
  .btn-host {
    background-color: #fff;
    border: 2px solid #aeb0d3;
    color: #aeb0d3;
  }
`;

const MainHeader = () => {
  const [
    isGuestModalVisible,
    setIsGuestModalVisible,
    handleGuestVisible,
  ] = useToggle(false);

  const [
    isHostModalVisible,
    setIsHostModalVisible,
    handleHostVisible,
  ] = useToggle(false);

  const { me } = useSelector((state) => state.user);

  if (!me) return null;

  return (
    <MainHeaderWrapper>
      {/* <MyProfileWrapper>
        <div className="profile-image">
          <Image
            width={120}
            src={`data:image/png;base64,` + me.data.profileImage}
            style={{ marginRight: "20px" }}
          />
        </div>
        <div className="profile-desc">
          <div className="info">Info</div>
          <div className="role">{me.data.email}</div>
          <div className="username">{me.data.name}</div>
        </div>
      </MyProfileWrapper> */}
      <div style={{ flex: "1" }}>
        <Descriptions bordered>
          <Descriptions.Item>
            <Image
              width={120}
              src={`data:image/png;base64,` + me.data.profileImage}
              style={{ marginRight: "20px" }}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Name">{me.data.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{me.data.email}</Descriptions.Item>
        </Descriptions>
      </div>

      <RoomBtnWrapper>
        <div className="guest">
          <Button
            type="primary"
            className="btn-guest"
            onClick={handleGuestVisible}
          >
            Guest
          </Button>
          <Modal
            title="Join Group"
            isModalVisible={isGuestModalVisible}
            setIsModalVisible={setIsGuestModalVisible}
            footer={false}
            width={400}
          >
            <JoinGroup setIsGuestModalVisible={setIsGuestModalVisible} />
          </Modal>
        </div>
        <div className="host">
          <Button
            type="primary"
            className="btn-host"
            onClick={handleHostVisible}
          >
            Host
          </Button>
          <Modal
            title="Create Group"
            isModalVisible={isHostModalVisible}
            setIsModalVisible={setIsHostModalVisible}
            footer={false}
            width={700}
          >
            <CreateGroup setIsHostModalVisible={setIsHostModalVisible} />
          </Modal>
        </div>
      </RoomBtnWrapper>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
