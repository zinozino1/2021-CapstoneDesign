import React from "react";
import { Modal as MD } from "antd";

/**
 * @author 박진호
 * @version 1.0
 * @summary 공통 모달 컴포넌트
 */

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
