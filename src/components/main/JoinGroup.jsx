import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Select, Button } from "antd";
import { palette } from "../../libs/constant/palette";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useSelector } from "react-redux";

const JoinGroupWrapper = styled.div``;

const JoinGroup = ({ setIsGuestModalVisible }) => {
  const { me } = useSelector((state) => state.user);

  const onSubmit = (item) => {
    if (me) {
      axios
        .post(`api/group/joinGroup/${me.data.userId}`, {
          groupEnterCode: item.groupCode,
        })
        .then((res) => {
          alert("You have completed the application for participation.");
          setIsGuestModalVisible(false);
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <JoinGroupWrapper>
      <Form onFinish={onSubmit}>
        <Form.Item
          name="groupCode"
          label="Group Code"
          rules={[
            {
              required: true,
              message: "Please input Group Code.",
            },
          ]}
        >
          <Input />
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
            Join
          </Button>
        </div>
      </Form>
    </JoinGroupWrapper>
  );
};

export default JoinGroup;
