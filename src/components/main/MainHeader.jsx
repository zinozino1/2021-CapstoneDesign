import React from "react";
import styled from "styled-components";
import { Image, Button, Descriptions } from "antd";
import useToggle from "../../hooks/useToggle";
import Modal from "../common/Modal";
import CreateGroup from "./CreateGroup";
import JoinGroup from "./JoinGroup";
import { useSelector } from "react-redux";

/**
 * @author 박진호
 * @version 1.0
 * @summary 메인 화면 헤더 컴포넌트
 */

const MainHeaderWrapper = styled.div`
  display: flex;

  @media (max-width: 1368px) {
    flex-direction: column;
  }
  .ant-descriptions .ant-descriptions-bordered {
    height: 100%;
  }
  .ant-descriptions-view {
    @media (max-width: 1368px) {
      th,
      td {
        font-size: 10px;
      }
    }
    height: 180px;
    th,
    td {
      height: 180px;
    }
  }
`;

const RoomBtnWrapper = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-left: none;
  flex: 1;
  height: 180px;

  @media (max-width: 1368px) {
    margin-top: 30px;
    border-left: 1px solid #ddd;
    height: 120px;
  }

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
      <div style={{ flex: "1" }}>
        <Descriptions bordered>
          <Descriptions.Item>
            <Image
              width={120}
              src={`data:image/png;base64,` + me.data.image1}
              style={{ marginRight: "20px" }}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Name">{me.data.name}</Descriptions.Item>
          {/* <Descriptions.Item label="Email">{me.data.email}</Descriptions.Item> */}
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
