import React from "react";
import styled from "styled-components";
import { Form, Input, Select, Button } from "antd";
import {
  CLASS_DURATION_HOUR,
  CLASS_DURATION_MINUTE,
  ABSENCE_TIME,
  ALERT_ATMOSPHERE,
} from "../../libs/constant/constant";
import { palette } from "../../libs/constant/palette";

const CreateGroupWrapper = styled.div``;

const InputLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const CreateGroup = () => {
  return (
    <CreateGroupWrapper>
      <Form {...InputLayout}>
        <Form.Item
          name="groupName"
          label="Group Name"
          rules={[
            {
              required: true,
              message: "Please input Group Name.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="groupCode"
          label="Group Code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled placeholder="ASDFSADF" />
        </Form.Item>
        <Form.Item
          name="groupDurationSetting"
          label="Class Duration"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div style={{ display: "flex" }}>
            <Select placeholder="h" style={{ flex: "1" }}>
              {CLASS_DURATION_HOUR.map((v, i) => (
                <Select.Option value={v}>{v}</Select.Option>
              ))}
            </Select>
            <Select placeholder="m" style={{ flex: "1" }}>
              {CLASS_DURATION_MINUTE.map((v, i) => (
                <Select.Option value={v}>{v}</Select.Option>
              ))}
            </Select>
          </div>
        </Form.Item>
        <Form.Item
          name="absenceTime"
          label="Absence Time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="m" style={{ flex: "1" }}>
            {ABSENCE_TIME.map((v, i) => (
              <Select.Option value={v}>{v}</Select.Option>
            ))}
          </Select>
          <div style={{ fontSize: "0.7rem", color: "#bbb" }}>
            * Set Time for Attendance Failure
          </div>
        </Form.Item>
        <Form.Item
          name="absenceTime"
          label="Atmosphere Alert Time"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="m" style={{ flex: "1" }}>
            {ALERT_ATMOSPHERE.map((v, i) => (
              <Select.Option value={v}>{v}</Select.Option>
            ))}
          </Select>
          <div style={{ fontSize: "0.7rem", color: "#bbb" }}>
            * Set Time for Alert
          </div>
        </Form.Item>
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100px",
              background: palette.mainBG,
              border: `1px solid ` + palette.mainBG,
            }}
          >
            Create
          </Button>
        </div>
      </Form>
    </CreateGroupWrapper>
  );
};

export default CreateGroup;
