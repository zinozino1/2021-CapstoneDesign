import React from "react";
import { Modal as MD } from "antd";

const Modal = ({
  children,
  title,
  isModalVisible,
  setIsModalVisible,
  footer,
  width,
}) => {
  return (
    <MD
      title={title}
      visible={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false);
      }}
      footer={footer}
      width={width}
    >
      {children}
    </MD>
  );
};

export default Modal;
