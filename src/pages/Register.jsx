import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthLayout from "../components/layout/AuthLayout";
import { Form, Input, Button, Upload, Image, Modal } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { CLIENT_URL } from "../libs/constant/constant";
import FormData from "form-data";
import ExampleProfileImage from "../statics/images/ExampleProfileImage.jpeg";
import { palette } from "../libs/constant/palette";
import axios from "axios";

const RegisterWrapper = styled.div`
  padding: 50px 50px;
  .ant-upload-list-picture-card-container {
    width: 120px;
    height: 140px;
    /* margin-left: 30px; */
  }
  .ant-upload-select-picture-card {
    width: 120px;
    height: 140px;
    /* margin-left: 30px; */
  }
`;

const InputLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Register = () => {
  const formData = new FormData();

  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // formData.append("email", "asdf");
  // formData.append("name", "asdf");
  // formData.append("password", "asdf");
  // formData.append("passwordConfirm", "asdf");

  const onSubmit = (values) => {
    console.log(values);
    formData.append("email", values.email);
    formData.append("name", values.name);
    formData.append("password", values.password);
    formData.append("passwordConfirm", values.passwordConfirm);
    fileList.forEach((file, i) => {
      formData.append("file" + i, file);
    });
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // console.log(values);
    axios
      .post("http://localhost:8080/api/auth/register", formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeImage = (paramFileList) => {
    setFileList(paramFileList.fileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    );
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);

  return (
    <AuthLayout>
      <RegisterWrapper>
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
        <Form {...InputLayout} onFinish={onSubmit}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid Email!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="passwordConfirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
              {
                min: 3,
                message: "Please enter at least 3 characters!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="profileImage"
            label="Profile Image"
            valuePropName="fileList"
            //getValueFromEvent={normFile}
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <div style={{ border: "1px solid red", display: "flex" }}>
              <div>
                <Image
                  width={120}
                  src={ExampleProfileImage}
                  style={{ marginRight: "20px" }}
                />
                <div
                  style={{
                    paddingLeft: "25px",
                    color: "#bbb",
                  }}
                >
                  -Example-
                </div>
              </div>
              <div style={{ padding: "10% 30px" }}>
                <span style={{ color: "red" }}>*</span> Please upload a picture
                of you looking straight ahead.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                border: "1px solid red",
              }}
            >
              <Upload
                name="logo"
                beforeUpload={(file) => {
                  setFileList(file);
                  return false;
                }}
                listType="picture-card"
                accept="image/*"
                //fileList={fileList}
                onPreview={handlePreview}
                onChange={onChangeImage}
                style={{
                  width: "140px",
                  margin: "0",
                }}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </div>
          </Form.Item>

          <div style={{ textAlign: "center", padding: "20px" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100px",
                background: palette.mainBG,
                border: `1px solid ` + palette.mainBG,
              }}
            >
              Register
            </Button>
          </div>
        </Form>
      </RegisterWrapper>
    </AuthLayout>
  );
};

export default Register;
