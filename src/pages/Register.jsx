import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AuthLayout from "../components/layout/AuthLayout";
import { Form, Input, Button, Upload, Image, Modal } from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { CLIENT_URL } from "../libs/constant/constant";
import FormData from "form-data";
import ExampleProfileImage from "../statics/images/ExampleProfileImage.jpeg";

const RegisterWrapper = styled.div`
  padding: 50px 50px;
  .ant-upload-list-picture-card-container {
    width: 120px;
    height: 140px;
  }
  .ant-upload-select-picture-card {
    width: 120px;
    height: 140px;
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

  const onChangeImage = (paramFileList) => {
    console.log(paramFileList);
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

  const normFile = (e) => {
    if (e.file.status === "done") {
      formData.append("avatar", e.fileList[0].originFileObj);
    } else if (e.file.status === "removed") {
      formData.delete("avatar");
    }
    let fileList = e.fileList;
    fileList = fileList.slice(-1);
    if (Array.isArray(e)) {
      return e;
    }
    return e && fileList;
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
        <Form {...InputLayout}>
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
            name="confirm"
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
            style={{ border: "1px solid red" }}
          >
            <div style={{ display: "flex", border: "1px solid blue" }}>
              <Image
                width={185}
                src={ExampleProfileImage}
                style={{ border: "1px solid red" }}
              />
              <Upload
                name="logo"
                // action="/upload.do"
                listType="picture-card"
                accept="image/*"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={onChangeImage}
                style={{ width: "140px", border: "1px solid red" }}
              >
                {fileList.length >= 1 ? null : uploadButton}
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
            <div>Example</div>
          </Form.Item>
        </Form>
      </RegisterWrapper>
    </AuthLayout>
  );
};

export default Register;
