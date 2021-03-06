import React from "react";
import styled, { css } from "styled-components";
import { List, Tag } from "antd";
import useToggle from "../../hooks/useToggle";
import Modal from "../common/Modal";
import GuestHistoryDetail from "./GuestHistoryDetail";
import HostHistoryDetail from "./HostHistoryDetail";

/**
 * @author 박진호
 * @version 1.0
 * @summary 히스토리 리스트 아이템 컴포넌트
 */

const HistoryListItemWrapper = styled(List.Item)`
  ${(props) =>
    props.idx % 2 === 0
      ? css`
          background: #f0f2f6;
        `
      : css`
          background: #f4f2f6;
        `}

  padding: 18px 30px;
  margin-bottom: 10px;
  transition: 0.3s;
  display: flex;
  cursor: pointer;

  .ant-list-item-action {
    margin-top: 5px;
    margin-left: 0;
  }
  .ant-list-item-meta-title {
    font-size: 18px;
  }
  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.21);
    transition: 0.3s;
  }

  .list-title,
  .list-col {
    flex: 1;
  }
  .list-title {
    font-size: 1.2rem;
  }
  .list-col {
    text-align: center;
  }
  .list-data {
    margin-top: 5px;
  }
  .list-index {
    text-align: center;
    .ant-tag {
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const HistoryListItem = ({ item, idx }) => {
  const [modalVisible, setModalVisible, handleModalVisible] = useToggle(false);

  const onClickItem = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <HistoryListItemWrapper idx={idx} onClick={onClickItem}>
        <div className="list-title">{item.groupName}</div>
        <div className="list-col">
          <span className="list-index">
            <Tag color="magenta">Created At</Tag>
          </span>
          <div className="list-data">{`${item.createdYear}.${item.createdMonth}.${item.createdDay}`}</div>
        </div>
        <div className="list-col">
          <span className="list-index">
            <Tag color="green">Attendance</Tag>
          </span>
          <div className="list-data">{`${item.attendanceCount}/100`}</div>
        </div>
        <div className="list-col">
          <span className="list-index">
            <Tag color="orange">Vibe</Tag>
          </span>
          <div className="list-data">
            {item.vibe >= 0 && item.vibe < 2
              ? "😞"
              : item.vibe >= 2 && item.vibe < 3
              ? "😐"
              : "😭"}
          </div>
        </div>
        <div className="list-col">
          <span className="list-index">
            <Tag color="blue">Role</Tag>
          </span>
          <div className="list-data">{item.role}</div>
        </div>
      </HistoryListItemWrapper>
      {item.role === "GUEST" ? (
        <Modal
          title="History Detail - Guest"
          isModalVisible={modalVisible}
          setIsModalVisible={setModalVisible}
          footer={false}
          width={900}
        >
          <GuestHistoryDetail data={item} />
        </Modal>
      ) : (
        <Modal
          title="History Detail - Host"
          isModalVisible={modalVisible}
          setIsModalVisible={setModalVisible}
          footer={false}
          width={900}
        >
          <HostHistoryDetail data={item} />
        </Modal>
      )}
    </>
  );
};

export default HistoryListItem;
