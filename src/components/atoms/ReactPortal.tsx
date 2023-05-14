import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

const createWrapperAndAppendToBody = (wrapperId: string): HTMLDivElement => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface ReactPortalProps {
  children: ReactNode;
  portalId?: string;
}

const ReactPortal = ({ children, portalId = "modal" }: ReactPortalProps) => {
  let element = document.getElementById(portalId);

  if (!element) {
    element = createWrapperAndAppendToBody(portalId);
  }

  return createPortal(children, element);
};

export default ReactPortal;
