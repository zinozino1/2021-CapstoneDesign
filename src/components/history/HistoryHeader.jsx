import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import { YEAR, MONTH, DAY } from "../../libs/constant/constant";

/**
 * @author 박진호
 * @version 1.0
 * @summary 히스토리 헤더 컴포넌트
 */

const { Option } = Select;

const HistoryHeaderWrapper = styled.div`
  margin: 20px 0;
  .select {
    width: 120px;
    margin-right: 10px;
  }
`;

const HistoryHeader = () => {
  const onChangeSelect = () => {};

  return (
    <HistoryHeaderWrapper>
      <Select
        className="select"
        placeholder="Group Name"
        onChange={onChangeSelect}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <Select className="select" placeholder="Year">
        {YEAR.map((v, i) => (
          <Option key={i} value={`v`}>
            {v}
          </Option>
        ))}
      </Select>
      <Select className="select" placeholder="Month">
        {MONTH.map((v, i) => (
          <Option key={i} value={`v`}>
            {v}
          </Option>
        ))}
      </Select>
      <Select className="select" placeholder="Day">
        {DAY.map((v, i) => (
          <Option key={i} value={`v`}>
            {v}
          </Option>
        ))}
      </Select>
      <Select className="select" placeholder="Role">
        <Option value="host">Host</Option>
        <Option value="guest">Guest</Option>
      </Select>
    </HistoryHeaderWrapper>
  );
};

export default HistoryHeader;
