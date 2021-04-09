import React from "react";
import { Modal as MD } from "antd";

const Modal = ({
  children,
  title,
  isModalVisible,
  setIsModalVisible,
  footer,
}) => {
  return (
    <MD
      title={title}
      visible={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false);
      }}
      footer={footer}
      width={600}
    >
      {children}
    </MD>
  );
};

export default Modal;
