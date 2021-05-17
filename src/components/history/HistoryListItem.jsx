import React from "react";
import styled, { css } from "styled-components";
import { List, Avatar, Space, Tag, Popover, Image } from "antd";

const HistoryListItemWrapper = styled(List.Item)`
  ${(props) =>
    props.idx % 2 === 0
      ? css`
          background: #f0f2f6;
        `
      : css`
          background: #f4f2f6;
        `}

  padding: 10px 30px;
  margin-bottom: 10px;
  transition: 0.3s;
  display: flex;

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
  return (
    <HistoryListItemWrapper idx={idx}>
      <div className="list-title">{item.groupName}</div>
      <div className="list-col">
        <span className="list-index">
          <Tag color="magenta">Created At</Tag>
        </span>
        <div className="list-data">{`${item.createdAt.getFullYear()}.${item.createdAt.getMonth()}.${item.createdAt.getDate()}`}</div>
      </div>
      <div className="list-col">
        <span className="list-index">
          <Tag color="green">Attendance</Tag>
        </span>
        <div className="list-data">{`${item.attendance}/100`}</div>
      </div>
      <div className="list-col">
        <span className="list-index">
          <Tag color="orange">Vibe</Tag>
        </span>
        <div className="list-data">
          {item.vibe >= 0 && item.vibe < 33
            ? "😞"
            : item.vibe >= 33 && item.vibe < 66
            ? "😐"
            : "😭"}
        </div>
      </div>
    </HistoryListItemWrapper>
  );
};

export default HistoryListItem;
