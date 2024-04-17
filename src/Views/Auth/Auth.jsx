import React, { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import Login from "./sections/Login/Login";
import Register from "./sections/Register/Register";

export default function Auth({ isOpen, closeModal, isMobile }) {
  const [loginView, setLoginView] = useState(true);

  return (
    <Modal isOpen={true} closeModal={closeModal} width={700} height={"80vh"}>
      {loginView ? (
        <Login changeView={() => setLoginView(false)} />
      ) : (
        <Register changeView={() => setLoginView(true)} />
      )}
    </Modal>
  );
}
