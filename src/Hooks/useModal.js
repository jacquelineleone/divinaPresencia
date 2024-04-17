import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal, setIsOpen];
};
