import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input, Select, Button } from "antd";
import {
  ABSENCE_TIME,
  ALERT_ATMOSPHERE,
  BACK_URL,
} from "../../libs/constant/constant";
import { palette } from "../../libs/constant/palette";
import { useSelector } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";

/**
 * @author 박진호
 * @version 1.0
 * @summary 그룹 생성 컴포넌트
 */

const CreateGroupWrapper = styled.div``;

const InputLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const CreateGroup = ({ setIsHostModalVisible }) => {
  const { me } = useSelector((state) => state.user);
  const [isCreated, setIscreated] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const onSubmit = (item) => {
    axios
      .post(`${BACK_URL}/api/group/createGroup`, {
        name: item.groupName,
        absenceTime: item.absenceTime,
        alertDuration: item.alertTime,
        userId: me && me.data.userId,
      })
      .then((res) => {
        alert("The group created successfully.");
        setIsHostModalVisible(false);
        setGroupId(res.data.id);
        setIscreated(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isCreated && groupId) return <Redirect to={`/main/${groupId}`} />;

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
        <Form.Item label="Alert Duration">
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
