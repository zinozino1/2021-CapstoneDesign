import React from "react";
import { Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

const HistoryHeaderWrapper = styled.div``;

const HistoryHeader = () => {
  const onChangeSelect = () => {};

  return (
    <HistoryHeaderWrapper>
      <Select
        placeholder="Group Name"
        style={{ width: 120 }}
        onChange={onChangeSelect}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select style={{ width: 120 }} placeholder="Year">
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select style={{ width: 120 }} placeholder="Month">
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select style={{ width: 120 }} placeholder="Day">
        <Option value="lucy">Lucy</Option>
      </Select>
      <Select style={{ width: 120 }} placeholder="Role">
        <Option value="lucy">Lucy</Option>
      </Select>
    </HistoryHeaderWrapper>
  );
};

export default HistoryHeader;
