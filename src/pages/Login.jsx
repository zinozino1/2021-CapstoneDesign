import React, { useEffect } from "react";
import styled from "styled-components";
import AuthLayout from "../components/layout/AuthLayout";
import { Form, Input, Button } from "antd";
import { palette } from "../libs/constant/palette";
import { CLIENT_URL } from "../libs/constant/constant";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import useInput from "../hooks/useInput";

const LoginWrapper = styled.div`
  padding: 50px 50px;
`;

const InputLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onLogin = (values) => {
    dispatch(loginRequestAction({ ...values }));
  };

  useEffect(() => {
    if (me) {
      history.push("/main");
    }
  }, [me, history]);

  return (
    <AuthLayout>
      <LoginWrapper>
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            fontWeight: "600",
          }}
        >
          <a href={CLIENT_URL} style={{ color: "#ccc" }}>
            Focus
          </a>
        </div>
        <Form {...InputLayout} name="login" onFinish={onLogin}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input placeholder="Input your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Input your password" />
          </Form.Item>
          <div style={{ marginTop: "60px" }}>
            <div style={{ textAlign: "center" }}>
              <Button
                type="primary"
                style={{
                  background: palette.mainBG,
                  border: `1px solid ` + palette.mainBG,
                  width: "100px",
                }}
                htmlType="submit"
              >
                Login
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type="text">
                <a
                  href={`${CLIENT_URL}/register`}
                  style={{ textDecoration: "underLine", color: "#aaa" }}
                >
                  Register
                </a>
              </Button>
            </div>
          </div>
        </Form>
      </LoginWrapper>
    </AuthLayout>
  );
};

export default Login;
