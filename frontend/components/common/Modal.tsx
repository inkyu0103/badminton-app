import { ModalProps } from "interface/Modal.interface";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && isOpen) {
      document.body.style.cssText = `
        position:fixed;
        top : -${window.scrollY}px;
        overflow-y:scroll;
        width:100%;
      `;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  });

  if (isMounted) {
    const portalDiv = document.querySelector("#modal-root");

    if (!portalDiv) return null;

    return isOpen
      ? createPortal(
          <dialog
            open={isOpen}
            className={`absolute w-full h-screen m-0 flex justify-center items-center bg-slate-900/70`}
            style={{
              top: scrollY,
            }}
          >
            {children}
          </dialog>,
          document.querySelector("#modal-root") as HTMLDivElement,
        )
      : null;
  }
  return null;
};
export default Modal;
