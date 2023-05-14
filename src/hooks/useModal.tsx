import { useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return { show, handleShow, handleClose };
};

export default useModal;
