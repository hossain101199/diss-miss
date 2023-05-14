import React, { ReactNode, useEffect } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

import ReactPortal from "../atoms/ReactPortal";

interface ModalP {
  show: any;
  handleClose: () => void;
  children: ReactNode;
}

const Modal = ({ show, handleClose, children }: ModalP) => {
  const ref = useOutsideClick(handleClose);

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [show]);

  return (
    show && (
      <ReactPortal portalId="modal">
        <>
          <div className="justify-center items-center flex fixed inset-0 z-[99] ">
            <div className="relative mx-auto bg-backgroundGradient" ref={ref}>
              <div className="mainBgImage w-fit">{children}</div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-[90] bg-black hover:cursor-pointer" />
        </>
      </ReactPortal>
    )
  );
};

export default Modal;
