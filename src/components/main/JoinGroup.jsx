import React from "react";
import styled from "styled-components";
import { Form, Input, Select, Button } from "antd";
import { palette } from "../../libs/constant/palette";

const CreateGroupWrapper = styled.div``;

const JoinGroup = () => {
  return (
    <CreateGroupWrapper>
      <Form>
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
    </CreateGroupWrapper>
  );
};

export default JoinGroup;
