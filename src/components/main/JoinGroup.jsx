import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Select, Button } from "antd";
import { palette } from "../../libs/constant/palette";
import useInput from "../../hooks/useInput";

const JoinGroupWrapper = styled.div``;

const JoinGroup = () => {
  const [groupCode, setGroupCode, onChangeGroupCode] = useInput("");

  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <JoinGroupWrapper>
      <Form onFinish={onSubmit}>
        <Form.Item
          name="groupName"
          label="Group Code"
          rules={[
            {
              required: true,
              message: "Please input Group Code.",
            },
          ]}
        >
          <Input onChange={onChangeGroupCode} />
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
