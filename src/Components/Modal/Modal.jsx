import React from "react";
import style from "./styles/modal.module.css";

export default function PersistentModal({
  children,
  isOpen,
  closeModal,
  width,
  height,
}) {
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className={`${style.modal} ${isOpen && style.isOpen}`}>
      <div
        className={style.modalContainer}
        onClick={handleModalClick}
        style={{ width: width, height: height }}
      >
        {children}
      </div>
    </div>
  );
}
