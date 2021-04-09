import React from "react";
import { Modal as MD } from "antd";

const Modal = ({ children, isModalVisible, setIsModalVisible, footer }) => {
  return (
    <MD
      title="Basic Modal"
      visible={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false);
      }}
      footer={footer}
    >
      {children}
    </MD>
  );
};

export default Modal;
