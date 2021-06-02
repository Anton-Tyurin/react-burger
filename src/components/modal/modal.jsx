import React from "react";
import * as ReactDOM from "react-dom";
import style from "./modal.module.css";
import ModalHeader from "./modal-header";
import ModalOverlay from "./modal-overlay/modal-overlay";
import PropTypes from "prop-types";

function Modal(props) {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");
  return (
    modalRoot &&
    ReactDOM.createPortal(
      <>
        <div className={style.modal}>
          <ModalHeader header={header} onClose={onClose} />
          {children}
        </div>
        <ModalOverlay onClose={onClose} />
      </>,
      modalRoot
    )
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
