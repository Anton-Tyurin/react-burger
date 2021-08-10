import React from "react";
import * as ReactDOM from "react-dom";
import style from "./modal.module.css";
import ModalHeader from "./modal-header";
import ModalOverlay from "./modal-overlay/modal-overlay";

type TProps = {
  children: any;
  header?: string;
  onClose: () => void;
};

const Modal: React.FC<TProps> = (props) => {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");
  return (
    modalRoot &&
    ReactDOM.createPortal(
      <>
        <div className={style.modal}>
          {header && <ModalHeader header={header} onClose={onClose} />}
          {children}
        </div>
        <ModalOverlay onClose={onClose} />
      </>,
      modalRoot
    )
  );
};

export default Modal;
