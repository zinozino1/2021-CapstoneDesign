import React, { useState } from "react";
import styled from "styled-components";
import { Image, Button } from "antd";
import ExampleProfileImage from "../../statics/images/ExampleProfileImage.jpeg";
import useToggle from "../../hooks/useToggle";
import Modal from "../common/Modal";
import CreateGroup from "./CreateGroup";
import JoinGroup from "./JoinGroup";

const MainHeaderWrapper = styled.div`
  display: flex;
`;
const MyProfileWrapper = styled.div`
  border: 1px solid red;
  flex: 1;
  display: flex;
  .profile-image {
    text-align: center;
    flex: 1;
    border: 1px solid violet;
  }
  .profile-desc {
    flex: 1;
    border: 1px solid violet;
    .role {
      font-weight: 600;
      font-size: 2rem;
      border: 1px solid red;
    }
    .username {
      font-size: 1.25rem;
      border: 1px solid red;
      color: #aaa;
    }
  }
`;

const RoomBtnWrapper = styled.div`
  display: flex;
  border: 1px solid red;
  flex: 1;

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

  return (
    <MainHeaderWrapper>
      <MyProfileWrapper>
        <div className="profile-image">
          <Image
            width={120}
            src={ExampleProfileImage}
            style={{ marginRight: "20px" }}
          />
        </div>
        <div className="profile-desc">
          <div className="role">Student</div>
          <div className="username">박진호</div>
        </div>
      </MyProfileWrapper>
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
            title="Create Group"
            isModalVisible={isGuestModalVisible}
            setIsModalVisible={setIsGuestModalVisible}
            footer={false}
            width={400}
          >
            <JoinGroup />
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
            title="Join Group"
            isModalVisible={isHostModalVisible}
            setIsModalVisible={setIsHostModalVisible}
            footer={false}
            width={600}
          >
            <CreateGroup />
          </Modal>
        </div>
      </RoomBtnWrapper>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
