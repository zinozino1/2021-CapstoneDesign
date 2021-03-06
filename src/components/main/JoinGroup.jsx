import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { palette } from "../../libs/constant/palette";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadWaitingListRequestAction } from "../../reducers/post";

/**
 * @author 박진호
 * @version 1.0
 * @summary 그룹 참여 컴포넌트
 */

const JoinGroupWrapper = styled.div``;

const JoinGroup = ({ setIsGuestModalVisible }) => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (item) => {
    if (me) {
      axios
        .post(`api/group/joinGroup/${me.data.userId}`, {
          groupEnterCode: item.groupCode,
        })
        .then((res) => {
          dispatch(loadWaitingListRequestAction(me.data.userId));
          alert("You have completed the application for participation.");
          setIsGuestModalVisible(false);
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
