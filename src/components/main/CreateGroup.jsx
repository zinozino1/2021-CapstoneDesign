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
  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <CreateGroupWrapper>
      <Form {...InputLayout} onFinish={onSubmit}>
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
        <Form.Item name="groupCode" label="Group Code" initialValue="aaa">
          <Input placeholder="ASDFSADF" disabled />
        </Form.Item>
        <Form.Item label="Class Duration">
          <div style={{ display: "flex" }}>
            <Form.Item
              name="groupDurationHour"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="hour" style={{ flex: "1" }}>
                {CLASS_DURATION_HOUR.map((v, i) => (
                  <Select.Option key={i} value={v}>
                    {v}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="groupDurationMin"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="minute" style={{ flex: "1" }}>
                {CLASS_DURATION_MINUTE.map((v, i) => (
                  <Select.Option key={i} value={v}>
                    {v}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item label="Absence Time">
          <Form.Item
            noStyle
            name="absenceTime"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="minute" style={{ flex: "1" }}>
              {ABSENCE_TIME.map((v, i) => (
                <Select.Option key={i} value={v}>
                  {v}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div style={{ fontSize: "0.7rem", color: "#bbb" }}>
            * Set Time for Attendance Failure
          </div>
        </Form.Item>
        <Form.Item label="Atmosphere Alert Time">
          <Form.Item
            noStyle
            name="alertTime"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="minute" style={{ flex: "1" }}>
              {ALERT_ATMOSPHERE.map((v, i) => (
                <Select.Option key={i} value={v}>
                  {v}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
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
